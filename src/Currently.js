import React from 'react';
import './App.css';

class Currently extends React.Component {

  render () {
    // console.log("what we got", this.props)
    return (
      <>
        <div className="Currently">
          Currently it is {this.props.data.summary}, with a temperature of {Math.round(this.props.data.temperature)}, apparent temperature of {Math.round(this.props.data.apparentTemperature)}.

        </div>
        <div className="Minutely">
          Minutely forecast is  {this.props.minutely.summary}
        </div>
      </>
    );

  }
}

export default Currently;
