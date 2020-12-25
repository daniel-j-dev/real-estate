import { useState, useEffect } from "react"
import AppContext from "./contexts/AppContext"
import "./App.css"

import Header from "./components/header/Header"
import Search from "./components/search/Search"
import PropertyType from "./components/propertyType/PropertyType"
import PriceRange from "./components/priceRange/PriceRange"
import Results from "./components/results/Results"

import dummyData from './dummyData'

function App() {
  const [settings, setSettings] = useState({
    priceRange: { //Settings updates approprately based on listings
      min: 846, //Lowest price in listings 
      max: 2392, //Highest price in listings
      leftVal: 954, //Left slider handle value
      rightVal: 1800, //Right slider handle value
    },
  })

  const [listings, setListings] = useState([...dummyData])

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

    //// --Assigning appropriate height to each bar in the chart

    let newPriceBars = new Array(28).fill([1]).flat()

    const barPercent = 1 / 27 //The percent of the data each bar will represent. 28 bars total (index 0 - 27) so it's 1/27 for the percent in decimal.

    for (let i = 0; i < listings.length; i++) {
      // Finding the percent of the way this price is between the min price and max price. In English, we're finding out which bar in the distribution chart that this listing should add to.
      const valPercent =
        (listings[i].price - settings.priceRange.min) /
        (settings.priceRange.max - settings.priceRange.min)

      //Translating the percent above to the bar index
      const barIndex = Math.ceil(valPercent / barPercent)

      console.log(`barIndex: ${barIndex}`)

      //Adding 1 to the correct bar
      newPriceBars[barIndex]++
    }

    setPriceBars([...newPriceBars])
  }, [])

  return (
    <div className="App">
      <AppContext.Provider
        value={{ settings, setSettings, listings, setListings, priceBars }}
      >
        <div id="upper">
          <Header />
          <Search />
          <PropertyType />
          <PriceRange />
        </div>
        <Results />
      </AppContext.Provider>
    </div>
  )
}

export default App
