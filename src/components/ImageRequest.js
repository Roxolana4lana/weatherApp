import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Api_Key = '11494222-34bf811251776054a0d41e468'

export default class ImageRequest extends Component {
    state={
        ci:'',
        loading: true
    }
    componentDidMount() {
        const city = this.props.ci
      
        fetch(`https://pixabay.com/api/?key=${Api_Key}&q=${city}&image_type=photo`)
            .then(data => data.json())
            .then(data => this.setState({
                ci: data.hits[0].largeImageURL,
                loading:false
            }))
            .catch(err => {
                if (err) console.error("Cannot fetch Weather Data from API, ", err);
            });

    }
  render() {
      console.log(this.state.ci)
      console.log(this.props.ci)
    return (
      <div>
            {!this.state.loading && (
                <img className='myimg'src={this.state.ci} alt="" style={{ width: '30rem' , height:'25rem'}} />
            )}
      </div>
    )
  }
}
ImageRequest.PropTypes={
ci : PropTypes.string.isRequired
}

