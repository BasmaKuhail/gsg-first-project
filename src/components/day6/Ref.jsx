import { useRef, useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0);
    let countRef = useRef(0);

    // {current : 0}
    function increaseCounter(){
       countRef.current = countRef.current +1; 
       //this wont re-render the component
       console.log(countRef.current)
    }

    function increaseCounter2(){
    //    countRef.current = countRef.current +1; 
    //    //this wont re-render the component
    //    console.log(countRef.current)

    setCounter(counter +1)
    }
    return(<>
        <button onClick={increaseCounter}>
        UseRef: You chicked {countRef.current} times
    </button>
    <button onClick={increaseCounter2}>
        UseState: You chicked {counter} times
    </button>
    </>
   )
}