import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BandArc extends Component {
  static propTypes = {
    circleRadius: PropTypes.number.isRequired,
    endAngle: PropTypes.number.isRequired,
    innerColor: PropTypes.string,
    maxArcLength: PropTypes.number.isRequired,
    outerColor: PropTypes.string.isRequired,
    startAngle: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    zeroAngularOffset: PropTypes.number.isRequired,
  }

  render () {
    const {
      circleRadius,
      endAngle,
      innerColor,
      maxArcLength,
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
          r={circleRadius}
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
          r={circleRadius}
        />
      </g>
    )
  }
}

export default BandArc
