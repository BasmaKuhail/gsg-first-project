import { useState } from "react"

export default function Counter(){
    const [arr, setArr] = useState([0,0,0]);
    
    function handleClic(i){
        let newArr = arr.map((item, index)=>{
            if(index === i){
                return ++item;
            }else{
                return item;
            }
        })
        setArr(newArr)
    }
    return(
        <ul>
            {arr.map((item, i)=> (
                <li key={i}>
                    {item}
                    <button 
                    onClick={() => {handleClic(i)}}
                    >+1
                    </button>
                </li>
            ))}
        </ul>);
}