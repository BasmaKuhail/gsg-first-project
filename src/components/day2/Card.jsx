import { Children } from "react";
import Avatar from "./Avatar";
const Card = ({name, children}) =>{
    console.log()
    return <>
        <div> This is {name}</div>
        {children}
    </> 
}


export default Card;