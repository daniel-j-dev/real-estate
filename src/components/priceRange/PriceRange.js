import React, { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import Slider, { createSliderWithTooltip } from "rc-slider"
import "rc-slider/assets/index.css"
import "./PriceRange.css"

const PriceRange = () => {
  const { settings } = useContext(AppContext)

  const { min, max, dLeftVal, dRightVal } = settings.priceRange

  const Range = createSliderWithTooltip(Slider.Range)

  const handleChanges = (value) => {}

  return (
    <div id="price-range-container">
      <h4>Price range</h4>
      <Range
        allowCross={false}
        min={min}
        max={max}
        defaultValue={[dLeftVal, dRightVal]}
        tipFormatter={(value) => `$${value.toLocaleString()}`}
        onChange={(value) => handleChanges(value)}
      />
    </div>
  )
}

export default PriceRange
