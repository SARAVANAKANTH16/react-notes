import { Component } from "react";

class EventListener extends Component{
    handleClick(){
        console.log("button is clicked")
    }
    render(){
        return(
            <div>
                This is a class component 
                <button onClick={this.handleClick}>Click</button>
                
            </div>
        )
    }
}

/*import React from 'react'

const EventListener = () => {
  
    function handleClick(){
        console.log("Button is clicked");
    }
  return (
    <div>
        <h1>this is me</h1>
        <button onClick={handleClick}>CLICK</button>
    </div>
  )
}*/

export default EventListener