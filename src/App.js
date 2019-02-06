import React, { Component } from 'react';
import Form from './components/Form'
import './output.css'



class App extends Component {
  render() {
    return (
      <div className="main_container">
      <div className='myBorder'></div>
  <div className='introWords'>
  <h1>Hello :) <span>Welcome to my weather page!!!!</span></h1>
  </div>
<Form></Form>
  
      </div>
      
    );
  }
}

export default App;
