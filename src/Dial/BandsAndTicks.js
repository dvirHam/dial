import React, { Component } from 'react'

import BandArc from './BandArc'
import Tick from './Tick'

class BandsAndTicks extends Component {
  render() {
    const {
      angularScale,
      bandRanges,
      radialOffset,
      maxArcLength,
      innerColor,
      strokeWidth,
      tickRadialOffset,
      tickLength,
      tickThickness,
      zeroAngularOffset,
    } = this.props

    const bands = bandRanges.map((band, index) => {
      const tickPosition = band.tickPosition
      if (tickPosition) {
        return <Tick
          key={index}
          rotation={angularScale(band[tickPosition])}
          radialOffset={radialOffset - tickRadialOffset}
          color={band.color}
          strokeWidth={tickThickness}
          length={tickLength}
        />
      } else {
        return <BandArc
          key={index}
          outerColor={band.color}
          radialOffset={radialOffset}
          maxArcLength={maxArcLength}
          endAngle={angularScale(band.to)}
          innerColor={innerColor}
          startAngle={angularScale(band.from)}
          strokeWidth={strokeWidth}
          zeroAngularOffset={zeroAngularOffset}
        />
      }
    })

    return (
      <g className="BandsAndTicks">
        {bands}
      </g>
    )
  }
}

export default BandsAndTicks
