import { useEffect, useRef, useState } from "react"

export default function USeRef(){
    //it will not re-render when the value changes
    //used for accessing the DOM elements

    // const [value, setValue] = useState(0);
    // // const [count, setCount] = useState(0);

    // //to count the number of renders (infinte loop)
    // // useEffect(()=>{
    // //     setCount(count +1);
    // // })

    // //useRef:
    // //dose not re-render the componenet whenever its value changes!
    // const count = useRef(0);

    // useEffect(()=> {
    //     count.current = count.current +1
    // })
    // return<>
    //     <button onClick={()=> setValue((prev)=> prev -1)}>-1</button>
    //     <h1>{value}</h1>
    //     <button onClick={()=> setValue((prev)=> prev +1)}>+1</button>

    //     <h1>Render Count: {count.current}</h1>
    // </>

    //------

    const inputElmnt = useRef();

    const handleBtn = () =>{
        console.log(inputElmnt.current)
        inputElmnt.current.style.background = "blue"
    }


    return(<>
        <input type="text" ref={inputElmnt}/>
        <button onClick={handleBtn}>Click Here to change background</button>
    </>)
}