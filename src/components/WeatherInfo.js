import React, { Component } from 'react'
import WeatherData from './WeatherData'
import PropTypes from 'prop-types'


const Api_Key = "17a9c7162404f715183af1c63085339b";

export default class WeatherInfo extends Component {
    state={
        temp: '',
        weather: '',
        wind: '',
        isLoading:true
   
    }
 componentDidMount(){
       const city= this.props.city   
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`)
   .then(data=>data.json())
       .then(data => this.setState({ temp:data.main.temp,
                weather: data.weather[0].description,
                isLoading:false,
        wind: data.wind.speed}))
       .catch(err => {
           if (err) console.error("Cannot fetch Weather Data from API, ", err);
       });
       
       }
          
  render() {

    return (
        <div className='weather_info'>
        {this.state.isLoading && <h1>Loading...Write the correct name of the city in English :)</h1>}
        {!this.state.isLoading && (
            <div>
                <h1> The city is {this.props.city}</h1>
                <WeatherData temperatura={this.state.temp}
                wind={this.state.wind}
                weather={this.state.weather}
                ></WeatherData>
                    </div>
        )}
      
    
      

      </div>
    )
  }
}
WeatherInfo.PropTypes={
    city: PropTypes.string.isRequired
}
