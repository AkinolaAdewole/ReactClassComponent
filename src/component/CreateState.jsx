import React, { Component } from 'react'

export default class CreateState extends Component {

    state={
           goOut:"Yes"
    }

    toggleOut=()=>{
      this.setState(prevState=>{
        return {
          goOut:prevState.goOut==="Yes" ? "No" : "Yes"
        }
      })
    }
  render() {
    return (
      <>
          <h3>Shoud I go out?</h3>
          <div onClick={this.toggleOut}>
             <h3>{this.state.goOut}</h3>
          </div>
      
      </>
    )
  }
}
