import React, { Component } from 'react'
import WeatherData from './WeatherData'

const Api_Key = process.env.REACT_APP_WEATHER_KEY

export default class WeatherInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            temp: '',
            weather: '',
            wind: '',
            isLoading:true,
            city: this.props.city,
            myError:''
         }
    }

    componentDidUpdate(prevProps) {
        if (this.props.city !== prevProps.city) {
            const city = this.props.city
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`)
                .then(data => data.json())
                .then(data => this.setState({
                    temp: data.main.temp,
                    weather: data.weather[0].description,
                    isLoading: false,
                    wind: data.wind.speed,
                    myError: ''
                }))
                .catch(err => {
                    if (err) {
                        this.setState({
                            myError:'Type the correct name of the city in English!!!!!!!'
                        })
                        console.error("Cannot fetch Weather Data from API, ", err)
                    }
                })
        }
    }

    componentDidMount(){
        const city= this.state.city   
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`)
        .then(data=>data.json())
        .then(data => this.setState({ temp:data.main.temp,
            weather: data.weather[0].description,
            isLoading:false,
            myError:'',
            wind: data.wind.speed}))
            .catch(err => {
                if (err) {
                    this.setState({
                        myError: 'Type the correct name of the city in English!!!!!!!'
                    })
                    console.error("Cannot fetch Weather Data from API, ", err)
                }
            }) 
    }
         
  render() {
    return (
        <div className='weather_info'>
            {this.state.isLoading && <h1>Loading...Write the correct name of the city in English :)</h1>}
            {this.state.myError?<h1>{this.state.myError}</h1>: (
            <div>
                <h1> The city is {this.props.city}</h1>
                <WeatherData 
                temperatura={this.state.temp}
                wind={this.state.wind}
                weather={this.state.weather}/>
            </div>
        )}
      </div>
    )
  }
}
