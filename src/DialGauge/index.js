import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import PropTypes from 'prop-types'

import BandsAndTicks from './BandsAndTicks'
import Donut from './Donut'
import Pointer from './Pointer'
import PointerText from './PointerText'
import ScaleArc from './ScaleArc'
import ScaleMarkers from './ScaleMarkers'

function getColorFromRanges(value, ranges, defaultColor) {
  const containingRange = (ranges || []).find((range) => {
    const lowestValue = Math.min(range.from, range.to)
    const highestValue = Math.max(range.from, range.to)
    return lowestValue <= value && highestValue >= value
  })
  return (containingRange || {color: defaultColor}).color
}

class DialGauge extends Component {
  static propTypes = {
    arrowSize: PropTypes.number,
    arcColor: PropTypes.string,
    bandRanges: PropTypes.arrayOf(PropTypes.object),
    circleRadius: PropTypes.number.isRequired,
    clamped: PropTypes.bool.isRequired,
    currentValue: PropTypes.number.isRequired,
    defaultPointerColor: PropTypes.string.isRequired,
    donut: PropTypes.object,
    highValue: PropTypes.number.isRequired,
    innerColor: PropTypes.string.isRequired,
    lowValue: PropTypes.number.isRequired,
    markers: PropTypes.arrayOf(PropTypes.object).isRequired,
    maxRotation: PropTypes.number.isRequired,
    minRotation: PropTypes.number.isRequired,
    padding: PropTypes.number.isRequired,
    pointerLength: PropTypes.number,
    pointerTexts: PropTypes.arrayOf(PropTypes.object),
    pointerTextBox: PropTypes.object,
    pointerTextPosition: PropTypes.object,
    strokeWidth: PropTypes.number.isRequired,
  }

  render () {
    const {
      arrowSize,
      arcColor,
      bandRanges,
      circleRadius,
      clamped,
      currentValue,
      defaultPointerColor,
      donut,
      highValue,
      innerColor,
      lowValue,
      markers,
      maxRotation,
      minRotation,
      padding,
      pointerLength,
      pointerTexts,
      pointerTextBox,
      pointerTextPosition,
      strokeWidth,
    } = this.props

    const angularScale = scaleLinear()
      .domain([lowValue, highValue])
      .range([minRotation, maxRotation])
      .clamp(clamped)

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
        arrowSize={arrowSize}
        rotation={angularScale(currentValue)}
        length={pointerLength}
        strokeWidth={strokeWidth}
        color={pointerColor}
      /> : null

    const pointerText = pointerTexts && pointerTexts.length ? <PointerText
        pointerColor={pointerColor}
        textBox={pointerTextBox}
        texts={pointerTexts}
        xOffset={pointerTextPosition.x}
        yOffset={pointerTextPosition.y}
      /> : null

    const bandsAndTicks = bandRanges && bandRanges.length ? <BandsAndTicks
      angularScale={angularScale}
      bandRanges={bandRanges}
      circleRadius={circleRadius}
      maxArcLength={circumference}
      innerColor={innerColor}
      strokeWidth={strokeWidth}
      zeroAngularOffset={zeroAngularOffset}
    /> : null

    return (
      <g className="DialGauge" >
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

export default DialGauge
