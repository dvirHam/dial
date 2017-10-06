import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'

import BandsAndTicks from './BandsAndTicks'
import Donut from './Donut'
import Pointer from './Pointer'
import PointerText from './PointerText'
import ScaleArc from './ScaleArc'
import ScaleMarkers from './ScaleMarkers'

const BLACK = '#333333'

function getColorFromRanges(value, ranges, defaultColor) {
  const containingRange = (ranges || []).find((range) => {
    const lowestValue = Math.min(range.from, range.to)
    const highestValue = Math.max(range.from, range.to)
    return lowestValue <= value && highestValue >= value
  })
  return (containingRange || {color: defaultColor}).color
}

class Dial extends Component {
  render () {
    const {
      arcColor,
      bandRanges,
      circleRadius,
      currentValue,
      defaultPointerColor,
      donut,
      highValue,
      lowValue,
      markers,
      maxRotation,
      minRotation,
      padding,
      pointerLength,
      pointerTexts,
      pointerTextPosition,
      strokeWidth,
    } = this.props

    const angularScale = scaleLinear()
      .domain([lowValue, highValue])
      .range([minRotation, maxRotation])
      .clamp(true)

    const circumference = Math.PI * 2 * circleRadius
    const zeroAngularOffset = circumference / 4
    const centreX = padding + circleRadius
    const centreY = padding + circleRadius

    const pointerColor = getColorFromRanges(
      currentValue, bandRanges, defaultPointerColor
    )

    const donutElement = donut ? <Donut
        color={donut.color}
        radialOffset={circleRadius + donut.radialOffset || 2}
        radius={donut.radius || 2.5}
        rotation={angularScale(donut.value)}
        strokeWidth={strokeWidth}
      /> : null

    const pointer = pointerLength ? <Pointer
        rotation={angularScale(currentValue)}
        length={pointerLength}
        strokeWidth={strokeWidth}
        color={pointerColor}
      /> : null

    const pointerText = pointerTexts && pointerTexts.length ? <PointerText
        color={pointerColor}
        texts={pointerTexts}
        xOffset={pointerTextPosition.x}
        yOffset={pointerTextPosition.y}
      /> : null

    const bandsAndTicks = bandRanges && bandRanges.length ? <BandsAndTicks
      angularScale={angularScale}
      bandRanges={bandRanges}
      circleRadius={circleRadius}
      maxArcLength={circumference}
      innerColor={BLACK}
      strokeWidth={strokeWidth}
      zeroAngularOffset={zeroAngularOffset}
    /> : null

    return (
      <g className="Dial" >
        <g transform={`translate(${centreX},${centreY})`}>
          <ScaleArc
            arcColor={arcColor}
            circleRadius={circleRadius}
            maxArcLength={circumference}
            minRotation={minRotation}
            maxRotation={maxRotation}
            strokeWidth={strokeWidth}
            zeroAngularOffset={zeroAngularOffset}
          />

          <ScaleMarkers
            scaleColor={arcColor}
            markers={markers}
            angularScale={angularScale}
            circleRadius={circleRadius}
            strokeWidth={strokeWidth}
          />

          {donutElement}
          {bandsAndTicks}
          {pointerText}
          {pointer}
        </g>
      </g>
    )
  }
}

export default Dial
