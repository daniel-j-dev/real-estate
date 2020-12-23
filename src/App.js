import { useState } from "react"
import AppContext from "./contexts/AppContext"
import "./App.css"

import Header from "./components/header/Header"
import Search from "./components/search/Search"
import PropertyType from "./components/propertyType/PropertyType"
import PriceRange from "./components/priceRange/PriceRange"
import Results from "./components/results/Results"

function App() {
  const [listings, setListings] = useState([])

  const [settings] = useState({
    priceRange: {
      min: 846,
      max: 1392,
      dLeftVal: 954, //Default left slider handle value
      dRightVal: 1200, //Default right slider handle value
    },
  })

  return (
    <div className="App">
      <AppContext.Provider value={{ settings, listings, setListings }}>
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
