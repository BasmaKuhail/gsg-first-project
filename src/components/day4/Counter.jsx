import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);

    return(
        <>
            <h1>{counter}</h1>
            <button
                onClick={() =>{
                    //setCounter(counter +1);
                    // setCounter(counter +3);
                    // setCounter(counter +4);
                    //no mater how many times we update the state, it only updates one
                    
                    // alert(counter); //will alert the old value

                    // setTimeout(()=>{
                    //     alert(counter) },3000);


                    //this way react is gonna queue all the functions and excute them one by one
                    //this way it will update the counter 3 times
                    // setCounter((prev) => prev +1);
                    // setCounter((ba) => ba +1);
                    // setCounter((foo) => foo +1);

                    //another example
                    //if we do this it will add 6
                    setCounter(counter +5);
                    setCounter((n) => n+1);


                    //if we do this it will add 5
                    // setCounter((n) => n+1);
                    // setCounter(counter +5);

                    //this will take the most updated value: 25
                    setCounter(counter +5);
                    setCounter((n) => n+1);
                    setCounter(25);
                }}>
                add
            </button>
        </>
    )
}