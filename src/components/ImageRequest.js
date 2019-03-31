import React, { Component } from 'react'

const Api_Key = process.env.REACT_APP_IMAGE_KEY


export default class ImageRequest extends Component {
    constructor(props){
        super(props)
        this.state = { ci: '', loading: false, city: this.props.ci, myError: ''}
    }

    componentDidUpdate (prevProps) {
        if (this.props.ci !== prevProps.ci) {
            const city = this.props.ci
            fetch(`https://pixabay.com/api/?key=${Api_Key}&q=${city}&image_type=photo`)
                .then(data => data.json())
                .then(data => this.setState({
                    ci: data.hits[0].largeImageURL,
                    loading: false,
                    myError: ''
                }))
                .catch(err => {
                    if (err) {
                        this.setState({
                            myError: 'https://cdn.pixabay.com/photo/2016/06/09/00/06/oops-1444975_960_720.jpg'
                        })
                        console.error("Cannot fetch Weather Data from API, ", err)}
                })
        }
    }

     componentDidMount() {
     const city =  this.state.city
        fetch(`https://pixabay.com/api/?key=${Api_Key}&q=${city}&image_type=photo`)
            .then(data => data.json())
            .then(data => this.setState({
                ci: data.hits[0].largeImageURL,
                loading:false,
                myError: ''
            }))
            .catch(err => {
                if (err) {
                    this.setState({
                        myError: 'https://cdn.pixabay.com/photo/2016/06/09/00/06/oops-1444975_960_720.jpg' 
                    })
                    console.error("Cannot fetch Weather Data from API, ", err)}
            })
    }

  render() {
    return (
      <div>
            {this.state.myError ? <img className='myimg' src={this.state.myError} alt="city" /> :
             <img className='myimg' src={this.state.ci} alt="city" />}
            
      </div>
    )
  }
}
