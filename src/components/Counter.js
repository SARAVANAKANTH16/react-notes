import { Component } from "react";
class Counter extends Component{

    constructor(){
        super();
        this.state = {
            counter:0,
        }
        //this.onincrement = this.onincrement.bind(this)
    }

    onincrement(){
        this.setState({
            counter: this.state.counter+1,
        });
    }

    ondecrement(){
        this.setState({
            counter: this.state.counter-1,
        })
    }
    render(){
        return(
            <div>
            <h3>
                count value is {this.state.counter}
            </h3>
            <button onClick={()=>this.onincrement()}>Increment</button>
            <button onClick={()=>this.ondecrement()}>Decrement</button>
            </div>
        );
    }
}

export default Counter;