import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScaleMarkers extends Component {
  static propTypes = {
    angularScale: PropTypes.func.isRequired,
    circleRadius: PropTypes.number.isRequired,
    markers: PropTypes.arrayOf(PropTypes.object),
    scaleColor: PropTypes.string.isRequired,
    strokeWidth: PropTypes.number.isRequired,
  }

  render () {
    const {
      angularScale,
      circleRadius,
      markers,
      scaleColor,
      strokeWidth,
    } = this.props

    const markerElements = markers.map((marker, index) => {
      return marker.size ? <line
        key={index}
        stroke={scaleColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        transform={`rotate(${angularScale(marker.value)})`}
        x1={0}
        y1={-circleRadius}
        x2={0}
        y2={marker.size - circleRadius}
      /> : null
    })

    const markerLabels = markers.map((marker, index) => {
      const label = marker.label
      if (!label) { return null }

      const angle = angularScale(marker.value)

      return <g
        key={index}
        transform={`
          translate(0, ${-circleRadius})
          rotate(${angle})
          translate(0, ${label.radialOffset + marker.size})
          rotate(${-angle},0,${-circleRadius})`
        }>
        <text
          style={{textAnchor: 'middle'}}
          fill={label.color}
          letterSpacing={label.letterSpacing}
          fontFamily={label.fontFamily}
          fontSize={label.fontSize}
        >
          {label.text}
        </text>
      </g>
    })

    return (
      <g className="ScaleMarkers">
        {markerElements}
        {markerLabels}
      </g>
    )
  }
}

export default ScaleMarkers
