import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Donut extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    radialOffset: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    rotation: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
  }

  render() {
    const {
      color,
      radialOffset,
      radius,
      rotation,
      strokeWidth,
    } = this.props

    return (
      <g className="Donut">
        <circle
          transform={`rotate(${rotation})`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          cx="0"
          cy={-radialOffset}
          r={radius}
        />
      </g>
    )
  }
}

export default Donut
