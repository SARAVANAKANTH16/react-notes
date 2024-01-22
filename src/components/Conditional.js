/*
LIST
export default function Conditional(){
    const products = [
        {id:1,name:"Laptop",price:500},  
        {id:1,name:"Phone",price:200},  
        {id:1,name:"Modem",price:50},  
        {id:1,name:"Laptop",price:900},  

    ];

    const productList = products.map((product)=>(
        <h3 key={product.id}>
            {product.name}: ${product.price}
        </h3>
    ));
    return <div>{productList}</div>
}*/









/*import { useState } from "react";
let output;


export default function Conditional(){
    const [display,setDisplay] = useState(true)

    return display ? (
        <div>
            <h3>This is  a conditional component</h3>
        </div>
    ):(
        <div>
            <h3>Nothing to see here</h3>
        </div>

    )
}
function Conditional(){
    const [display,setDisplay] = useState(true);
    if(display){
        output= <h3>This is a Conditional Component</h3>
    }
    else{
        output=<h3>Nothing to see here</h3>
    }

    return <div>{output}</div>
}

export default Conditional;



import { useState } from "react";

export default function ConditionalComponent(){
    const [display,setDisplay] = useState(false);
    if(display){
        return(
            <div>
                <h1>This is a class component</h1>
            </div>
        );
    }
    else{
        return(
            <div>
                <h1>Nothing to see here</h1>
            </div>
        );
    }
}*/