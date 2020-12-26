import React, { useContext, useEffect } from "react"
import AppContext from "../../contexts/AppContext"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./PriceRange.css"

const PriceRange = () => {
  const {
    settings,
    setSettings,
    listings,
    priceBars,
    setPriceBars,
  } = useContext(AppContext)

  const { min, max, leftVal, rightVal } = settings.priceRange

  useEffect(() => {
    //// --Assigning appropriate height to each bar in the chart

    let newPriceBars = new Array(settings.priceRange.amtOfBars).fill([1]).flat()

    const barPercent = 1 / (settings.priceRange.amtOfBars - 1) //The percent of the data each bar will represent. Minus 1 because of index starting at 0. Dividing into 1 to get percent as a decimal.

    for (let i = 0; i < listings.length; i++) {
      // Finding the percent of the way this price is between the min price and max price. In English, we're finding out which bar in the distribution chart that this listing should add to.
      const valPercent =
        (listings[i].price - settings.priceRange.min) /
        (settings.priceRange.max - settings.priceRange.min)

      //Translating the percent above to the bar index
      const barIndex = Math.ceil(valPercent / barPercent)

      //Adding 1 to the correct bar
      newPriceBars[barIndex]++
    }

    setPriceBars([...newPriceBars])
  }, [listings])

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

  //// --Getting the largest value in priceBars to adjust the height of the bar's styling in JSX below

  let highestBarVal = -Infinity

  for (let i = 0; i < priceBars.length; i++) {
    if (priceBars[i] > highestBarVal) highestBarVal = priceBars[i]
  }

  // --Finding what bar each slider handle is on to update the bar colors appropriately

  const barPercent = 1 / (settings.priceRange.amtOfBars - 1)

  const minValue = leftVal

  const maxValue = rightVal

  const minPercent =
    (minValue - settings.priceRange.min) /
    (settings.priceRange.max - settings.priceRange.min)

  const maxPercent =
    (maxValue - settings.priceRange.min) /
    (settings.priceRange.max - settings.priceRange.min)

  const minIndex = Math.ceil(minPercent / barPercent)

  const maxIndex = Math.floor(maxPercent / barPercent)

  //Range

  const Range = Slider.Range

  //JSX

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
                index >= minIndex && index <= maxIndex ? "#287EFF" : "#96dbfa"
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
        onChange={(value) => handleChanges(value)}
      />
      <div id="range-labels">
        <label>{`$${min.toLocaleString()}`}</label>
        <label>{`$${max.toLocaleString()}`}</label>
      </div>
    </div>
  )
}

export default PriceRange
