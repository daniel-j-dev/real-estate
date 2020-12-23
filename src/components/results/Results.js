import React, { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import ResultItem from "../resultItem/ResultItem"
import "./Results.css"

const Results = () => {
  const { listings } = useContext(AppContext)

  return (
    <div id="results-container">
      <h2>Apartments</h2>
      <div id="results">
        {listings.map((l) => (
          <ResultItem
            image={l.image}
            price={l.price}
            address={l.address}
            sqFeet={l.sqFeet}
          />
        ))}
      </div>
    </div>
  )
}

export default Results
