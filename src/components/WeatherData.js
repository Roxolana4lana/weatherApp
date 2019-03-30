import React, { Component } from 'react'


export default class WeatherData extends Component {
  render() {
    return (
      <div>
        <h1>Temperature: {this.props.temperatura} &#8451;</h1>
        <h2>Speed of the wind: {this.props.wind} km/hour</h2>
        <h2>You may describe the weather as: {this.props.weather}</h2> 
      </div>
    )
  }
}
