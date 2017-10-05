import React, { Component } from 'react'

class ScaleMarkers extends Component {
  render () {
    const {
      arcColor,
      angularScale,
      radialOffset,
      labelFontSize,
      labelRadialOffset,
      majorMarkerLabels,
      majorMarkerSize,
      majorMarkerValues,
      minorMarkerSize,
      minorMarkerValues,
      strokeWidth,
    } = this.props

    const minorMarkers = minorMarkerValues.map((value, index) => {
      return <line
        key={index}
        stroke={arcColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        transform={`rotate(${angularScale(value)})`}
        x1={0}
        y1={-radialOffset}
        x2={0}
        y2={minorMarkerSize - radialOffset}
      />
    })

    const majorMarkers = majorMarkerValues.map((value, index) => {
      return <line
        key={index}
        stroke={arcColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        transform={`rotate(${angularScale(value)})`}
        x1={0}
        y1={-radialOffset}
        x2={0}
        y2={majorMarkerSize - radialOffset}
      />
    })

    const markerLabels = majorMarkerValues.map((value, index) => {
      const angle = angularScale(value)
      const verticalOffset = radialOffset
        - labelRadialOffset
        - labelFontSize / 2
        - majorMarkerSize

      const labelText = majorMarkerLabels[index]

      return <g
        key={index}
        transform={`
          translate(0, ${-verticalOffset})
          rotate(${angle})
          rotate(${-angle},0,${-verticalOffset})`
        }>
        <text
          style={{textAnchor: 'middle'}}
          transform={`translate(0, ${labelFontSize / 2})`}
          fill={arcColor}
          letterSpacing="0"
          fontFamily="Tahoma"
          fontSize={labelFontSize}>
          {labelText}
        </text>
      </g>
    })

    return (
      <g className="ScaleMarkers">
        {majorMarkers}
        {minorMarkers}
        {markerLabels}
      </g>
    )
  }
}

export default ScaleMarkers
