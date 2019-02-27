import React, { Component } from 'react'
import ImageRequest from './ImageRequest'
import WeatherInfo from './WeatherInfo'


 class Form extends Component {
    constructor(){
        super()
        this.state={
            city:'', 
            data:'',
            loading: false
        }  
     }

    getCity = e => {
        this.setState({city :e.target.value})         
     }
 
    getData = e => {
        e.preventDefault();  
        this.setState({data:this.state.city, city:''})
    }

  render() {
      let fillForm = this.state.data !== '' ? (
          <div className='container'>
              <WeatherInfo className='weather_info' city={this.state.data} /> 
              <ImageRequest className='image_info' ci={this.state.data} />
          </div>
       ):
  (<div className='instruction'> !!! Type the name of the city in English</div>)
 
    return (
        <div className='main_form '>
            <form onSubmit={this.getData}>
                <input className='myInput' 
                    type="text"
                    value={this.state.city}
                    name="city"
                    onChange={this.getCity}/>
                <button className='myBtn' 
                    type='submit'>
                    Submit</button>
            <div className='try'/>         
            </form>
            {fillForm}       
        </div>
    )
  }
}
export default Form
