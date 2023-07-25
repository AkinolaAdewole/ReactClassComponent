import React, { Component } from 'react'

export default class Greetings extends Component {

  render() {
   const date = new Date();
    const hours = date.getHours();

    let timeofDay
    
    if (hours < 12){
        timeofDay='morning'
    }else if(hours>=12 && hours<17){
        timeofDay="afternoon"
    } else{
        timeofDay="night"
    }    

    return (
      <div>
           <h1>Good {timeofDay} to you</h1>
      </div>
    )
  }
}
