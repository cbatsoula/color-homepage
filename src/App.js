import React from 'react';
import './App.css';
import Currently from './Currently'

const REACT_APP_API_KEY = `${process.env.REACT_APP_API_KEY}`
class App extends React.Component {

  state = {
    date: new Date(),
    weather: {},
  }

  randomColor = () => {
    let start = "#"
    let color = Math.floor(Math.random()*16777215).toString(16);
    let backgroundcolor = start.concat(color)
    // console.log(backgroundcolor)
    return backgroundcolor
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.getWeather()
  }

  getWeather = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${REACT_APP_API_KEY}/40.8267,-73.9233`, {
      method: "GET"},
      {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }})
      .then(r => r.json())
      .then(data => {
        this.setState({
          weather: data
        })
      })
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
    // console.log("what we got", this.state.weather.currently)
    return (
      <div className="App" style={{backgroundColor: this.randomColor()}}>
        <div className="Text">
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <Currently data={this.state.weather.currently}/>
        </div>

      </div>
    );

  }
}

export default App;
