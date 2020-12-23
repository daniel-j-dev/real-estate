import Header from "./components/header/Header"
import Search from "./components/search/Search"
import PropertyType from "./components/propertyType/PropertyType"
import PriceRange from "./components/priceRange/PriceRange"
import Results from "./components/results/Results"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <PropertyType />
      <PriceRange />
      <Results />
    </div>
  )
}

export default App
