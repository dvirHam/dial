import React, { Component } from 'react';
import './App.css';
import DialGauge from './DialGauge/'

const BLACK = '#333333'
const WHITE = '#ffffff'
const RED = '#FF0000'
const AMBER = '#FF9932'
const GREEN = '#18F360'

class App extends Component {
  render() {
    const markers = [
      {
        value: 0,
        size: 6,
        label: {
          color: WHITE,
          fontFamily: 'Tahoma',
          fontSize: 9.8,
          letterSpacing: 0,
          radialOffset: 2,
          text: "L",
        }
      },
      {
        value: 3,
        size: 3
      },
      {
        value: 6,
        size: 6,
        label: {
          color: WHITE,
          fontFamily: 'Tahoma',
          fontSize: 9.8,
          letterSpacing: 0,
          radialOffset: 2,
          text: "6"
        }
      },
      {
        value: 9,
        size: 3
      },
      {
        value: 12,
        size: 6,
        label: {
          color: WHITE,
          fontFamily: 'Tahoma',
          fontSize: 9.8,
          letterSpacing: 0,
          radialOffset: 2,
          text: "12"
        }
      },
      {
        value: 15,
        size: 3
      },
      {
        value: 18,
        size: 6,
        label: {
          color: "#d76",
          fontFamily: 'Tahoma',
          fontSize: 9.8,
          letterSpacing: 0,
          radialOffset: 2,
          text: "18"
        }
      },
      {
        value: 20,
        size: 3
      },
    ]

    const bandRanges = [
      {
        from: 0,
        to: 2,
        color: RED,
        hollow: true
      },
      {
        from: 14,
        to: 16,
        color: AMBER,
        tick: {
          value: 14,
          length: 6,
          radialOffset: 2,
          thickness: 2,
        }
      },
      {
        from: 16,
        to: 20,
        color: RED,
        hollow: false
      }
    ]

    const donut = {
      color: WHITE,
      radialOffset: 8,
      radius: 2.5,
      value: 10,
    }

    const pointerTexts = [
      {
        color: '#d86',
        fontFamily: 'Tahoma',
        fontSize: 11,
        letterSpacing: 0.4,
        textAnchor: 'middle',
        value: 59,
      },
      {
        fontFamily: 'Tahoma',
        fontSize: 8.5,
        letterSpacing: 0,
        textAnchor: 'middle',
        value: ".",
      },
      {
        fontFamily: 'Tahoma',
        fontSize: 8.5,
        letterSpacing: 0,
        textAnchor: 'middle',
        value: 26,
      },
    ]

    return (
      <div className="App">
        <svg width={400} height={400} >
          <rect width={400} height={400} fill={BLACK} />
          <DialGauge
            arrowSize={10}
            arcColor={WHITE}
            bandRanges={bandRanges}
            circleRadius={40}
            currentValue={12}
            defaultPointerColor={GREEN}
            donut={donut}
            highValue={20}
            innerColor={BLACK}
            lowValue={0}
            markers={markers}
            maxRotation={60}
            minRotation={-120}
            padding={40}
            pointerLength={43}
            pointerTexts={pointerTexts}
            pointerTextPosition={{x: 4, y: 4}}
            pointerTextBox={{
              borderColor: WHITE,
              fill: BLACK,
              height: 14,
              width: 40,
            }}
            strokeWidth={2}
          />
        </svg>
      </div>
    );
  }
}

export default App;
