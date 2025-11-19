import { useMemo } from "react";
import { useState } from "react"

export default function UseMemo(){
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cube(num){
        console.log("calc done")
        return Math.pow(num, 3);
    }

    const res = useMemo(()=> cube(number), [number])
    return(<>
        <input 
            onChange={(e) => setNumber(e.target.value)} 
            value={number} 
            name="number" 
            type="number"
        />
        <h1>result is: {res}</h1>

        <button onClick={()=> {setCounter(counter + 1)}}>Counter++</button>
        <h1>{counter}</h1>
    </>)
}