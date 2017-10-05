import React, { Component } from 'react'

class ScaleArc extends Component {
  render () {
    const {
      arcColor,
      circleRadius,
      maxArcLength,
      maxRotation,
      minRotation,
      strokeWidth,
      zeroAngularOffset,
    } = this.props

    const arcLength = maxArcLength * (maxRotation - minRotation) / 360
    const arcAngularOffset = maxArcLength * minRotation / 360

    return (
      <g className="ScaleArc">
        <circle
          fill="none"
          stroke={arcColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${arcLength}, ${maxArcLength - arcLength}`}
          strokeDashoffset={`${zeroAngularOffset - arcAngularOffset}`}
          r={circleRadius}
        />
      </g>
    )
  }
}

export default ScaleArc
