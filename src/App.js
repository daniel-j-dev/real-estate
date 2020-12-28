import { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AppContext from "./contexts/AppContext"
import "./App.css"

import Header from "./components/header/Header"
import Search from "./components/search/Search"
import PropertyType from "./components/propertyType/PropertyType"
import PriceRange from "./components/priceRange/PriceRange"
import Results from "./components/results/Results"
import PropertyView from "./components/propertyView/PropertyView"

import { properties } from "./dummyData"

function App() {
  const [settings, setSettings] = useState({
    propSearchType: "Apartments",
    lovedListings: {
      //This is a hashtable so that we don't have to loop through a list for every apartment to show that you've loved it. The Key is the associated listing id.
    },
    priceRange: {
      //Settings updates approprately based on listings
      min: 846, //Lowest price in listings
      max: 2392, //Highest price in listings
      leftVal: 954, //Left slider handle value
      rightVal: 1800, //Right slider handle value
      amtOfBars: 28, //How many bars to display in the chart
    },
  })

  const [listings, setListings] = useState([...properties])

  const [priceBars, setPriceBars] = useState([])

  useEffect(() => {
    //// --Finding minimum and maximum prices in all listings and updating state

    let minPrice = Infinity
    let maxPrice = -Infinity

    for (let i = 0; i < listings.length; i++) {
      let lp = listings[i].price
      if (minPrice > lp) minPrice = lp
      if (maxPrice < lp) maxPrice = lp
    }

    const newSettings = {
      ...settings,
    }

    newSettings.priceRange.min = minPrice
    newSettings.priceRange.max = maxPrice

    setSettings({ ...newSettings })
  }, [listings])

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider
          value={{
            settings,
            setSettings,
            listings,
            setListings,
            priceBars,
            setPriceBars,
          }}
        >
          <Route exact path="/">
            <div id="upper">
              <Header />
              <Search />
              <PropertyType />
              <PriceRange />
            </div>
            <Results />
          </Route>

          <Route path="/property/:id" component={PropertyView} />
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
