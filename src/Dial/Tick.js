import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tick extends Component {
  static propTypes = {
    rotation: PropTypes.number.isRequired,
    radialOffset: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
  }

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
