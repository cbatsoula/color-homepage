import React from 'react';
import './App.css';

class Currently extends React.Component {

  render () {
    // console.log("what we got", this.props)
    return (
      <>
        <div className="Currently">
          Currently it is {this.props.data.summary}, with a temperature of {Math.round(this.props.data.temperature)}, apparent temperature of {Math.round(this.props.data.apparentTemperature)}, humidity is {Math.round(this.props.data.humidity * 100)}%, atmospheric pressure is {this.props.data.pressure} mbar.

        </div>
        <div className="Minutely">
          Minutely forecast is  {this.props.minutely.summary}
        </div>
      </>
    );

  }
}

export default Currently;
