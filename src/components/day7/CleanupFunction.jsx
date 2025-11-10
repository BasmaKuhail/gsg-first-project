import { useEffect } from "react"
import { createConnection } from "./caht"
export default function ChatRoom(){
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        //cleanup function
        return () => connection.disconnect(); //in queue 
    },[])
    return(
        <div>welcom to chat</div> 
    )
}