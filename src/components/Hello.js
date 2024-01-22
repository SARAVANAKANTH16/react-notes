/*function Hello(){
    return <h1>Hello world!</h1>
}

const Hello = () =>{
    return <h1>Hello World</h1>
}

export default Hello;*/

const name="SARAVANAKANTH";

const displayMessage = () =>{
    return 'I need Help'
}
function Hello(){
    return <div>
        <h1>Hello World {name}</h1>
        <h3>total {10+20}</h3>
        <h2>{displayMessage()}</h2>
    </div>
}

export default Hello;

