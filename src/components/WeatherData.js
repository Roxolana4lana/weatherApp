import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class WeatherData extends Component {
  render() {
    return (
      <div>
            <h1>The temperature is {this.props.temperatura} &#8451;</h1>
        <h2>The speed of the wind is {this.props.wind} km/hour</h2>
        <h2>You may describe the weather as {this.props.weather}</h2>
         
        
      </div>
    )
  }
}
WeatherData.propTypes = {
    temperatura: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
}
