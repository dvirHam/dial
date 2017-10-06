import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BandArc from './BandArc'
import Tick from './Tick'

class BandsAndTicks extends Component {
  static propTypes = {
    angularScale: PropTypes.func.isRequired,
    bandRanges: PropTypes.arrayOf(PropTypes.object),
    circleRadius: PropTypes.number.isRequired,
    innerColor: PropTypes.string.isRequired,
    maxArcLength: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    zeroAngularOffset: PropTypes.number.isRequired,
  }

  render() {
    const {
      angularScale,
      bandRanges,
      circleRadius,
      innerColor,
      maxArcLength,
      strokeWidth,
      zeroAngularOffset,
    } = this.props

    const bands = bandRanges.map((band, index) => {
      const tick = band.tick
      if (tick) {
        return <Tick
          key={index}
          rotation={angularScale(tick.value)}
          radialOffset={circleRadius - tick.radialOffset}
          color={band.color}
          strokeWidth={tick.thickness}
          length={tick.length}
        />
      } else {
        return <BandArc
          key={index}
          outerColor={band.color}
          circleRadius={circleRadius}
          maxArcLength={maxArcLength}
          endAngle={angularScale(band.to)}
          innerColor={band.hollow ? null : innerColor}
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
