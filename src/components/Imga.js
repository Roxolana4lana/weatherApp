import React, { Component } from 'react'

export default class Imga extends Component {
  render() {
      console.log(this.props.ci)
    return (
      <div>
           
            <img src={this.props.ci} alt="" style={{ width: '100%' }} />
      </div>
    )
  }
}
