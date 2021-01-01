import React from "react"
import { propDetails } from "../../dummyData"
import locSVG from "../../assets/location.svg"
import bed from "../../assets/bed.svg"
import bath from "../../assets/bath.svg"
import paw from "../../assets/paw.svg"
import phone from "../../assets/phone.svg"
import message from "../../assets/message.svg"
import star from "../../assets/star.svg"
import leftArrow from "../../assets/left-arrow.svg"
import "./PropertyView.css"

const PropertyView = ({ match }) => {
  const prop = propDetails[`${match.params.id}`]

  return (
    <div>
      <div id="upperPhoto" style={{ backgroundImage: `url(${prop.image})` }}>
        <button id='backBtn'>
          <img src={leftArrow} />
        </button>
      </div>
      <div id="info">
        <div id="listingDetails">
          <div id="upperDetails">
            <div id="addrPrice">
              <h3>{prop.address}</h3>
              <h1>{`$${prop.price.toLocaleString()}`}</h1>
            </div>

            <div id="cityState">
              <img src={locSVG} />
              <span>{`${prop.city}, ${prop.state}`}</span>
            </div>
            <p id="type">Apartment</p>
          </div>
          <div id="roomsPets">
            <div className="infoItem">
              <img src={bed} />
              <span>
                {prop.beds} {prop.beds === 1 ? "bed" : "beds"}
              </span>
            </div>
            <div className="infoItem">
              <img id="bathSVG" src={bath} />
              <span>
                {prop.bathrooms}{" "}
                {prop.bathrooms === 1 ? "bathroom" : "bathrooms"}
              </span>
            </div>
            <div className="infoItem">
              <img id="pawSVG" src={paw} />
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
        </div>

        <div id="contact">
          <div id="contactLeft">
            <img id="contactPhoto" src={prop.contact.image} />
            <div>
              <p>{prop.contact.name}</p>
              <div>
                <img id="star" src={star} />
                <span>{prop.contact.rating}</span>
              </div>
            </div>
          </div>
          <div id="contactBtns">
            <button>
              <img src={phone} />
            </button>
            <button>
              <img src={message} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyView
