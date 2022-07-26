import React, { useState } from "react";

const Child2 = () => {
    const [name, setName] = useState("Rajesh");
    let chnageName = () =>{
        console.log("hello");
        setName("Sukhen");
    }
    console.log("Hello child 2");
    return(
        
        <>
        <p>My name is {name}</p>
        <button onClick={chnageName} > Change name </button>
        </>
    )
}

export default Child2;