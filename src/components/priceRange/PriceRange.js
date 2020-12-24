import React, { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./PriceRange.css"

const PriceRange = () => {
  const { settings } = useContext(AppContext)

  const { min, max, dLeftVal, dRightVal } = settings.priceRange

  //const Range = createSliderWithTooltip(Slider.Range)
  const Range = Slider.Range

  const handleChanges = (value) => {}

  return (
    <div id="price-range-container">
      <h4>Price range</h4>
      <Range
        allowCross={false}
        min={min}
        max={max}
        defaultValue={[dLeftVal, dRightVal]}
        handleStyle={[
          {
            backgroundColor: "#287EFF",
          },
          {
            backgroundColor: "#287EFF",
          },
        ]}
        railStyle={{
          backgroundColor: "#287EFF",
        }}
        trackStyle={[
          {
            backgroundColor: "#287EFF",
          },
        ]}
        onChange={(value) => handleChanges(value)}
      />
      <div id='range-labels'>
        <label>{`$${min.toLocaleString()}`}</label>
        <label>{`$${max.toLocaleString()}`}</label>
      </div>
    </div>
  )
}

export default PriceRange
