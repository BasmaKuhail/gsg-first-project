import { useCallback, useState } from "react"
import Header from "./Header"

export default function USeCallBack(){
    const [counter, setCounter] = useState(0)

    const newFn = useCallback(()=>{}, [])
    return(<>
        <Header newFn={newFn}/>
        <h1> {counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>+1</button>
    </>)
}