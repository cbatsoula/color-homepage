import React from 'react';
import './App.css';

class App extends React.Component {

  randomColor = () => {
    let start = "#"
    let color = Math.floor(Math.random()*16777215).toString(16);
    let backgroundcolor = start.concat(color)
    console.log(backgroundcolor)
    return backgroundcolor
  }




  render () {

    return (
      <div className="App" style={{backgroundColor: this.randomColor()}}>



      </div>
    );

  }
}

export default App;
