import { Children } from "react";


function displyMsg(msg, event){
    console.log(event)
    return(alert(msg))
}
export default function AlertButton({message, children}) {
    // console.log(prop)
    return <button onClick={()=> displyMsg(message)}>{children}</button>
}