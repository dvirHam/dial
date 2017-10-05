import React, { Component } from 'react'

class Pointer extends Component {
  render() {
    const {
      rotation,
      length,
      color,
      strokeWidth,
    } = this.props

    return (
      <g className="Pointer">
        <line
          transform={`rotate(${rotation})`}
          x1={0}
          x2={0}
          y1={0}
          y2={-length}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    )
  }
}

export default Pointer
