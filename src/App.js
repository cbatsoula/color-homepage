import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    date: new Date(),
  }

  randomColor = () => {
    let start = "#"
    let color = Math.floor(Math.random()*16777215).toString(16);
    let backgroundcolor = start.concat(color)
    console.log(backgroundcolor)
    return backgroundcolor
  }



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     color: randomColor(),
  //   };
  //
  // }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }





  render () {

    return (
      <div className="App" style={{backgroundColor: this.randomColor()}}>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>


      </div>
    );

  }
}

export default App;
