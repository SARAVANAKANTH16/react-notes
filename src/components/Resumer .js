function Resumer(props){
    const {name} = props;
    return(
        <h1>I am {name}</h1>
    )
}

/*import {Component} from 'react';
class Resumer extends Component{
    render(){
        const {name} = this.props;
        return <h1> this is a class component {name}</h1>
    }
}*/

export default Resumer;