import React, { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import heart from "../../assets/heart.png"
import heartFilled from "../../assets/heartFilled.png"
import "./ResultItem.css"

const ResultItem = ({ listingid, loved, image, price, address, sqFeet }) => {
  const { settings, setSettings } = useContext(AppContext)

  const tapHeart = (event) => {
    event.stopPropagation()

    let newLovedListings = settings.lovedListings

    if (loved) {
      delete newLovedListings[`${listingid}`]

      setSettings({
        ...settings,
        newLovedListings,
      })
    } else {
      newLovedListings[`${listingid}`] = null

      setSettings({
        ...settings,
        newLovedListings,
      })
    }
  }

  return (
    <div listingid={listingid} className="result-item">
      <img id="photo" src={image} alt="property" />
      <div id="details">
        <div id="details-upper">
          <h4 id="price">${price.toLocaleString()}</h4>
          <img
            id="love"
            src={loved ? heartFilled : heart}
            alt={loved ? "filled heart" : "empty heart"}
            onClick={(event) => tapHeart(event)}
          />
        </div>

        <div id="details-lower">
          <p id="address">{address}</p>
          <p>{sqFeet.toLocaleString()} Square ft</p>
        </div>
      </div>
    </div>
  )
}

export default ResultItem
