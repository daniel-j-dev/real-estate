import React from "react"
import "./PropertyType.css"

const PropertyType = () => {
  return (
    <div>
      <h4>Property</h4>
      <div id="property-types">
        <button>House</button>
        <button id="selected">Appartment</button>
        <button>Room</button>
      </div>
    </div>
  )
}

export default PropertyType
