import AlertButton from "./AlertButton"
import { Children } from "react"
function Button({onClick, children}){
    return <button onClick={onClick}>{children}</button>
}

function PlayButton({movieName}){
    
    function handleOnClick({movieName}){
        alert("Playing "+ movieName)
    }

    return <Button onClick={()=> handleOnClick({movieName})}> Play {movieName}</Button>
}
export default function ToolBar(){
    return <div>
        <PlayButton movieName="Inside Out"/>
        {/* <AlertButton message="alert button 1 clicked"> Play</AlertButton>
        <AlertButton message="alert button 2 clicked"> Play2</AlertButton> */}
    </div>
}