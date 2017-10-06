import React, { Component } from 'react'

class PointerText extends Component {
  render () {
    const {
      color,
      texts,
      xOffset,
      yOffset,
    } = this.props

    const tspans = texts.map((text, index) => {
      return (
        <tspan
          key={index}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          letterSpacing={text.letterSpacing}
          textAnchor={text.textAnchor}
        >{text.value}</tspan>
      )
    })

    const maxFontSize = Math.max(...texts.map(text => text.fontSize))

    return (
      <g className="PointerText">
        <text
          x={xOffset}
          y={yOffset + maxFontSize}
          fill={color}
          dominantBaseline="auto"
        >
          {tspans}
        </text>
      </g>
    )
  }
}

export default PointerText
