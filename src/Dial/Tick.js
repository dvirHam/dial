import React, { Component } from 'react'

class Tick extends Component {
  render () {
    const {
      rotation,
      radialOffset,
      color,
      strokeWidth,
      length,
    } = this.props

    return (
      <g className="Tick">
        <line
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          transform={`rotate(${rotation})`}
          x1={0}
          y1={-radialOffset}
          x2={0}
          y2={-radialOffset - length}
        />
      </g>
    )
  }
}

export default Tick
