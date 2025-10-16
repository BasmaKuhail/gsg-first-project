import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);

    return(
        <>
            <h1>{counter}</h1>
            <button
                onClick={() =>{
                    setCounter(counter +1);
                    // alert(counter); //will alert the old value
                    // setCounter(counter +1);
                    // setCounter(counter +1);
                    //no mater how many times we update the state, it only updates one
                    setTimeout(()=>{
                        alert(counter) },3000);
                }}>
                add 1
            </button>
        </>
    )
}