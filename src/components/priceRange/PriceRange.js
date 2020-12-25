import React, { useContext, useEffect } from "react"
import AppContext from "../../contexts/AppContext"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./PriceRange.css"

const PriceRange = () => {
  const { settings, setSettings, priceBars } = useContext(AppContext)

  const { min, max, leftVal, rightVal } = settings.priceRange

  const Range = Slider.Range

  const handleChanges = (value) => {
    const newSettings = {
      ...settings,
      priceRange: {
        ...settings.priceRange,
        leftVal: value[0],
        rightVal: value[1],
      },
    }

    setSettings({ ...newSettings })
  }

  //// --Getting the largest value in priceBars to adjust the height of the bars in styling

  let highestBarVal = -Infinity

  for (let i = 0; i < priceBars.length; i++) {
    if (priceBars[i] > highestBarVal) highestBarVal = priceBars[i]
  }

  // --Finding what bar each slider handle is on to update the bar colors appropriately

  const barPercent = 1 / 27

  // const minValue = document.getElementsByClassName("rc-slider-handle-1")[0]
  //   .ariaValueNow

  // const maxValue = document.getElementsByClassName("rc-slider-handle-2")[0]
  //   .ariaValueNow

  // const minValue = settings.priceRange.dLeftVal
  // const maxValue = settings.priceRange.dRightVal

  const minValue = leftVal

  const maxValue = rightVal

  const minPercent =
    (minValue - settings.priceRange.min) /
    (settings.priceRange.max - settings.priceRange.min)

  const maxPercent =
    (maxValue - settings.priceRange.min) /
    (settings.priceRange.max - settings.priceRange.min)

  const minIndex = Math.ceil(minPercent / barPercent)

  const maxIndex = Math.ceil(maxPercent / barPercent)

  return (
    <div id="price-range-container">
      <h4>Price range</h4>
      <div id="priceBars">
        {priceBars.map((val, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${(val / highestBarVal) * 100}%`,
              backgroundColor: `${
                index > minIndex && index < maxIndex ? "#287EFF" : "#96dbfa"
              }`,
            }}
            value={val}
          ></div>
        ))}
      </div>
      <Range
        allowCross={false}
        min={min}
        max={max}
        defaultValue={[leftVal, rightVal]}
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
        onAfterChange={(value) => handleChanges(value)}
      />
      <div id="range-labels">
        <label>{`$${min.toLocaleString()}`}</label>
        <label>{`$${max.toLocaleString()}`}</label>
      </div>
    </div>
  )
}

export default PriceRange
