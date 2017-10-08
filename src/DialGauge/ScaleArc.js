import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScaleArc extends Component {
  static propTypes = {
    arcColor: PropTypes.string.isRequired,
    circleRadius: PropTypes.number.isRequired,
    maxArcLength: PropTypes.number.isRequired,
    maxRotation: PropTypes.number.isRequired,
    minRotation: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    zeroAngularOffset: PropTypes.number.isRequired,
  }

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
