import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect(callBackFunction, dependancy)
    const [count, SetCount] = useState(0);
    const [dependancy, setDependancy] = useState(0);

    //1. no dependancy: it will excute whenver any state in this component renders
    //2. empty array: will excute it only once when first render the component
    //3. first will excute the function when count gets loaded and then whenever the count get changed
    useEffect(()=>{
        setTimeout(()=>{
            SetCount(count+1)
        }, 2000)

        setTimeout(()=>{
            setDependancy(dependancy+1)
        }, 4000)
    },[dependancy])

    return <>
        <h1>I have rendered {count} times!</h1>
        <h2>Dependancy: {dependancy}</h2>
    </>
}