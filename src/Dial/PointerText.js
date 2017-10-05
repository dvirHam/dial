import React, { Component } from 'react'

class PointerText extends Component {
  render () {
    const {
      fillColor,
      fontFamily,
      fontSize,
      letterSpacing,
      textAnchor,
      x,
      y,
      value,
    } = this.props

    const displayText = value ? 'block' : 'none'

    return (
      <g className="PointerText">
        <text
          display={displayText}
          fill={fillColor || '#18F360'}
          fontFamily={fontFamily}
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          textAnchor={textAnchor}
          x={x}
          y={y}
        >
          {value}
        </text>
      </g>
    )
  }
}

export default PointerText
