import React, { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import ResultItem from "../resultItem/ResultItem"
import "./Results.css"

const Results = () => {
  const { listings, settings } = useContext(AppContext)

  return (
    <div id="results-container">
      <h2>{settings.propSearchType}</h2>
      <div id="results">
        {listings.map((l, index) => (
          <ResultItem
            key={index}
            listingid={l.id}
            loved={`${l.id}` in settings.lovedListings ? true : false}
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
