import React, { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import "./PropertyType.css"

const PropertyType = () => {
  const { settings, setSettings } = useContext(AppContext)
  const pst = settings.propSearchType

  const handleInput = (event) => {
    setSettings({
      ...settings,
      propSearchType: event.target.id,
    })
  }

  return (
    <div>
      <h4>Property</h4>
      <div id="property-types">
        <button
          id="Houses"
          disabled={pst === "Houses"}
          onClick={(event) => handleInput(event)}
        >
          House
        </button>
        <button
          id="Apartments"
          disabled={pst === "Apartments"}
          onClick={(event) => handleInput(event)}
        >
          Apartment
        </button>
        <button
          id="Rooms"
          disabled={pst === "Rooms"}
          onClick={(event) => handleInput(event)}
        >
          Room
        </button>
      </div>
    </div>
  )
}

export default PropertyType
