import React, { Component } from 'react'

export default class CreateState extends Component {

    state={
           goOut:"Yes"
    }
  render() {
    return (
      <>
        <h3>Shoud I go out?</h3>
        <h3>{this.state.goOut}</h3>
      </>
    )
  }
}
