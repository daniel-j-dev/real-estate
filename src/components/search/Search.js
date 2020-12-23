import React from "react"
import mg from '../../assets/mg-edit.png'
import "./Search.css"

const Search = () => {
  return (
    <div>
      <h4>Location</h4>
      <div id="search-bar">
        <img src={mg} />
        <input />
      </div>
    </div>
  )
}

export default Search
