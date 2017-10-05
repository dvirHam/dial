import React, { Component } from 'react'

class Donut extends Component {
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
