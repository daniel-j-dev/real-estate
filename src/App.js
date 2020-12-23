import { useState } from "react"
import AppContext from "./contexts/AppContext"
import "./App.css"

import Header from "./components/header/Header"
import Search from "./components/search/Search"
import PropertyType from "./components/propertyType/PropertyType"
import PriceRange from "./components/priceRange/PriceRange"
import Results from "./components/results/Results"

import apt from './assets/apt-1.jpeg'

function App() {
  const [listings, setListings] = useState([
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
    {
      image: apt,
      price: 3560,
      address: "345 Hamilton Str.",
      sqFeet: 1211,
    },
  ])

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
