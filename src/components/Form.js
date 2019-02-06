import React, { Component } from 'react'
import WheatherInfo from './WeatherInfo'
import ImageRequest from './ImageRequest';

 class Form extends Component {
     state={
        city:'', 
        data:''
     }
     getCity=(e)=>{
         this.setState({city :e.target.value})
     }
     getData=e=>{
         e.preventDefault();
this.setState({data:this.state.city})

     }


  render() {
      let fillForm = this.state.data !== '' ? (<div className='container'><WheatherInfo className='weather_info' city={this.state.data} /> 
          <ImageRequest className='image_info'ci={this.state.data} />
        
        </div>):
  (<div className='instruction'> !!! Type the name of the city in English</div>)
  
  
    return (
     
        <div className='main_form '>
<form onSubmit={this.getData}>
<input className='myInput' type="text"
value={this.state.value}
name="city"
onChange={this.getCity}
></input>
<button className='myBtn' type='submit'>Submit</button>
   <div className='try'>         
{fillForm}
                </div>  
           

</form>
        </div>
    )
  }
}
export default Form
