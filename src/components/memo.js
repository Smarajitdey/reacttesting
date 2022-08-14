import React, { useMemo, useState } from "react";

const Memo = () => {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);
    const incrementOne = () =>{
        setcounterOne(counterOne+1);
    }
    const incrementTwo = () =>{
        setcounterTwo(counterTwo+1);
    }
    const isEven = useMemo(()=>{
        console.log("--------");
        let i =0;
        while(i<1000000000) i++;
        return counterOne%2 === 0;
    }, [counterOne]);
    // const isEven = () => {
    //     console.log("--------");
    //     let i =0;
    //     while(i<1000000000) i++;
    //     return counterOne%2 === 0;
    // }
    return(
        <>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>
        <span>{isEven?'Even':'Odd'}</span>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
        </>
    )
}

export default Memo;