import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);

    return(
        <>
            <h1>{counter}</h1>
            <button
                onClick={() =>{
                    //setCounter(counter +1);
                    // setCounter(counter +1);
                    // setCounter(counter +1);
                    //no mater how many times we update the state, it only updates one
                    
                    // alert(counter); //will alert the old value

                    // setTimeout(()=>{
                    //     alert(counter) },3000);


                    //this way react is gonna queue all the functions and excute them one by one
                    //this way it will update the counter 3 times
                    setCounter((prev) => prev +1);
                    setCounter((ba) => ba +1);
                    setCounter((foo) => foo +1);
                }}>
                add 3
            </button>
        </>
    )
}