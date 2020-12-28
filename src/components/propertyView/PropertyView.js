import React from "react"
import { propDetails } from "../../dummyData"
import "./PropertyView.css"

const PropertyView = ({ match }) => {
  const prop = propDetails[`${match.params.id}`]

  return (
    <div>
      <div id="upperPhoto" style={{ backgroundImage: `url(${prop.image})` }}>
        <button></button>
      </div>
      <div id="info">
        <div id="upperInfo">
          <div id="addrPrice">
            <h3>{prop.address}</h3>
            <h1>{`$${prop.price.toLocaleString()}`}</h1>
          </div>

          <div id="cityStateType">
            <img />
            <p>{`${prop.city}, ${prop.state}`}</p>
          </div>
          <p>Apartment</p>
        </div>
        <div id="roomsPets">
          <div className="infoItem">
            <img />
            <span>
              {prop.beds} {prop.beds === 1 ? "bed" : "beds"}
            </span>
          </div>
          <div className="infoItem">
            <img />
            <span>
              {prop.bathrooms} {prop.bathrooms === 1 ? "bathroom" : "bathrooms"}
            </span>
          </div>
          <div className="infoItem">
            <img />
            <span>
              {prop.pets === true ? "pets allowed" : "pets not allowed"}
            </span>
          </div>
        </div>
        <div id="descriptionContainer">
          <h4>Description</h4>
          <p>
            The cozy interior will comfort you here in Alaska through every
            season.
          </p>
        </div>
        <div id="contact">
          <img id="contactPhoto" src={prop.contact.image} />
          <div>
            <p>{prop.contact.name}</p>
            <p>{prop.contact.rating}</p>
          </div>
          <div>
            <button>call</button>
            <button>message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyView
