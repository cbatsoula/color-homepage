import React from 'react';
import './App.css';

class Currently extends React.Component {

  render () {
    console.log("what we got", this.props)
    return (
      <div className="Currently">
        Currently it is {this.props.data.summary}, with a temperature of {this.props.data.temperature}, apparent temperature of {this.props.data.apparentTemperature}.

      </div>
    );

  }
}

export default Currently;
