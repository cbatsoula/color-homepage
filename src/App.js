import React from 'react';
import './App.css';
import Currently from './Currently'

const REACT_APP_API_KEY = `${process.env.REACT_APP_API_KEY}`
class App extends React.Component {

  state = {
    date: new Date(),
    weather: {},
    rcolor: {},
  }

  randomColor = () => {
    let start = "#"
    let color = Math.floor(Math.random()*16777215).toString(16);
    let regexp = /^[0-9a-fA-F]+$/;
    console.log(regexp.test(color))
            if (regexp.test(color) && color.length === 6){
              let backgroundcolor = start.concat(color)
                // console.log("ya", backgroundcolor);

                this.setState({
                  rcolor: backgroundcolor,
                })
              } else {
                // console.log("nahh", color)

              }
    // console.log(color)
    return color
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.timerID = setInterval(
      () => this.randomColor(),
      5000
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
        console.log(data)
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
    // not yet is rendered for a solid minute -- figure out how to handle this better
    // console.log("what we got", this.state)
    return (
      <div className="App" style={{backgroundColor: this.state.rcolor}}>
        <div className="Text">
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          {
            this.state.weather.currently
            ?
            <Currently data={this.state.weather.currently} hourly={this.state.weather.hourly} minutely={this.state.weather.minutely}/>
            :
            <h1> not yet </h1>
          }
        </div>

      </div>
    );

  }
}

export default App;
