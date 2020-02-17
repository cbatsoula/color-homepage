import React from 'react';
import './App.css';

class Currently extends React.Component {

  render () {
    console.log("what we got", this.props)
    return (
      <div className="Currently">
        Currently
      </div>
    );

  }
}

export default Currently;
