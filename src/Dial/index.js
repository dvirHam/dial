import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'

import BandsAndTicks from './BandsAndTicks'
import Donut from './Donut'
import Pointer from './Pointer'
import PointerText from './PointerText'
import ScaleArc from './ScaleArc'
import ScaleMarkers from './ScaleMarkers'

const BLACK = '#333333'
const GREEN = '#18F360'
const WHITE = '#ffffff'

function getColorFromRanges(value, ranges) {
  const containingRange = ranges.find((range) => {
    const lowestValue = Math.min(range.from, range.to)
    const highestValue = Math.max(range.from, range.to)
    return lowestValue <= value && highestValue >= value
  })
  return (containingRange || {color: GREEN}).color
}

class Dial extends Component {
  render () {
    const {
      bandRanges,
      circleRadius,
      currentValue,
      donutOffset,
      donutRadius,
      donutValue,
      highValue,
      lowValue,
      majorMarkerValues,
      majorMarkerLabelFontSize,
      majorMarkerLabelRadialOffset,
      majorMarkerLabels,
      majorMarkerSize,
      maxRotation,
      minRotation,
      minorMarkerSize,
      minorMarkerValues,
      padding,
      pointerLength,
      strokeWidth,
      arcColor,
      tickLength,
      tickRadialOffset,
      tickThickness,
    } = this.props

    const angularScale = scaleLinear()
      .domain([lowValue, highValue])
      .range([minRotation, maxRotation])
      .clamp(true)

    const circumference = Math.PI * 2 * circleRadius
    const zeroAngularOffset = circumference / 4
    const centreX = padding + circleRadius
    const centreY = padding + circleRadius

    const pointerColor = getColorFromRanges(currentValue, bandRanges)

    const donutElement = donutValue ? <Donut
      color={WHITE}
      radialOffset={circleRadius + donutOffset}
      radius={donutRadius}
      rotation={angularScale(donutValue)}
      strokeWidth={strokeWidth}
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
            arcColor={arcColor}
            angularScale={angularScale}
            radialOffset={circleRadius}
            labelFontSize={majorMarkerLabelFontSize}
            labelRadialOffset={majorMarkerLabelRadialOffset}
            majorMarkerLabels={majorMarkerLabels}
            majorMarkerSize={majorMarkerSize}
            majorMarkerValues={majorMarkerValues}
            minorMarkerSize={minorMarkerSize}
            minorMarkerValues={minorMarkerValues}
            strokeWidth={strokeWidth}
          />

          {donutElement}

          <BandsAndTicks
            angularScale={angularScale}
            bandRanges={bandRanges}
            radialOffset={circleRadius}
            maxArcLength={circumference}
            innerColor={BLACK}
            strokeWidth={strokeWidth}
            tickRadialOffset={tickRadialOffset}
            tickLength={tickLength}
            tickThickness={tickThickness}
            zeroAngularOffset={zeroAngularOffset}
          />

          <Pointer
            rotation={angularScale(currentValue)}
            length={pointerLength}
            strokeWidth={strokeWidth}
            color={pointerColor}
          />

        </g>
      </g>
    )
  }
}

export default Dial
