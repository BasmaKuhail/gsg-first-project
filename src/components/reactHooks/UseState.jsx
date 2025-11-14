import { useState } from "react";

export default function ChangeText(){
    const [color, setColor] = useState("red")
    function changeColor(){
        setColor("blue")
    } 

    const [myCar, setCar] = useState({
        brand: "Ferrari",
        color: "blue",
        year: "2023"
    })

    function changeCarColor(){
        setCar({...myCar, color: "red"})
    }

    const [count, setcount] = useState(0)

    function increaseCount(){
        setcount(prev => prev +1)
        setcount(count => count +1)
        setcount(fa => fa +1)
    }
    return(<>
        <h1>My fav color is {color}</h1>
        <button onClick={changeColor}>Blue</button>
        <hr/>

        <h1>my {myCar.brand} is {myCar.color} from {myCar.year}</h1>
        <button onClick={changeCarColor}>Red</button>
        <hr/>

        <h1>{count}</h1>
        <button onClick={increaseCount}>+3</button>

    </>)
} 