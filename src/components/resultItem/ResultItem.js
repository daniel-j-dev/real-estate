import React from "react"
import './ResultItem.css'

const resultItem = ({ image, price, address, sqFeet }) => {

  return (
    <div id="result-item">
      <img src={image} />
      <div id="details">
        <h4 id="price">${price.toLocaleString()}</h4>
        <p id="address">{address}</p>
        <p>{sqFeet.toLocaleString()} Square Feet</p>
      </div>
    </div>
  )
}

export default resultItem
