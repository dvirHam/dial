import React, { Component } from 'react';
import './App.css';
import Dial from './Dial/'

const BLACK = '#333333'
const WHITE = '#ffffff'
const RED = '#FF0000'
const AMBER = '#FF9932'

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg width={400} height={400} >
          <rect width={400} height={400} fill={BLACK} />
          <Dial
            arcColor={WHITE}
            bandRanges={[
              {from: 0, to: 2, tickPosition: null, color: RED, hollow: true},
              {from: 14, to: 16, tickPosition: 'from', color: AMBER},
              {from: 16, to: 20, tickPosition: null, color: RED, hollow: false}
            ]}
            circleRadius={40}
            currentValue={4.567}
            donutRadius={2.5}
            donutOffset={8}
            donutValue={10} // Leave blank to hide donut
            highValue={20}
            lowValue={0}
            majorMarkerLabelFontSize={9.8}
            majorMarkerLabelRadialOffset={2}
            majorMarkerLabels={["L",6,12,18]}
            majorMarkerSize={6}
            majorMarkerValues={[0,6,12,18]}
            maxRotation={60}
            minorMarkerSize={3}
            minorMarkerValues={[3,9,15,20]}
            minRotation={-120}
            padding={40}
            pointerLength={43}
            pointerTexts={[
              {
                fontFamily: 'Tahoma',
                fontSize: 11,
                letterSpacing: 0.4,
                textAnchor: 'middle',
                value: 45,
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
            ]}
            pointerTextsX={4}
            pointerTextsY={4}
            strokeWidth={1.5}
            tickRadialOffset={2}
            tickLength={6}
            tickThickness={2}
          />
        </svg>
      </div>
    );
  }
}

export default App;
