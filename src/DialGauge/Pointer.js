import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pointer extends Component {
  static propTypes = {
    arrowSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    rotation: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
  }

  render() {
    const {
      arrowSize,
      color,
      length,
      rotation,
      strokeWidth,
    } = this.props

    return (
      <g className="Pointer" transform={`rotate(${rotation})`}>
        <line
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



