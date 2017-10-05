import React, { Component } from 'react'

class BandArc extends Component {
  render () {
    const {
      radialOffset,
      maxArcLength,
      endAngle,
      innerColor,
      outerColor,
      startAngle,
      strokeWidth,
      zeroAngularOffset,
    } = this.props

    const arcLength = maxArcLength * (endAngle - startAngle) / 360
    const arcAngularOffset = maxArcLength * startAngle / 360
    const halfStroke = strokeWidth / 2

    return (
      <g className="ScaleArc">
        <circle
          fill="none"
          stroke={outerColor}
          strokeWidth={2 * strokeWidth}
          strokeLinecap="butt"
          strokeDasharray={
            `${arcLength + strokeWidth},
            ${maxArcLength - arcLength - strokeWidth}`
          }
          strokeDashoffset={
            `${zeroAngularOffset + halfStroke - arcAngularOffset}`
          }
          r={radialOffset}
        />

        <circle
          display={innerColor ? 'initial' : 'none'}
          fill="none"
          stroke={innerColor}
          strokeWidth={halfStroke}
          strokeLinecap="butt"
          strokeDasharray={
            `${arcLength - strokeWidth},
            ${maxArcLength - arcLength + strokeWidth}`
          }
          strokeDashoffset={
            `${zeroAngularOffset - halfStroke - arcAngularOffset}`
          }
          r={radialOffset}
        />
      </g>
    )
  }
}

export default BandArc
