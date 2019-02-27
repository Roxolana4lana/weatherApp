import React, { Component } from 'react'


export default class Imga extends Component {
  render() {
    return (
      <div>
         <img src={this.props.ci} alt="" style={{ width: '100%' }} />
      </div>
    )
  }
}
