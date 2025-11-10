import { useEffect, useState } from "react"


function PlayGround(){
    const [text, setText] = useState("a")

    useEffect(() => { 
        function onTimeout(){
            console.log("timeout" + text)
        }
        console.log("Schedual" + text)

        const timoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log("Cancle")
            clearTimeout(timoutId)
        };
    },[text]);

    
    return(
        <>
            <label>
                what to log: {text} 
                <input
                    value = {text}
                    onChange={(e)=> setText(e.target.value)}
                />
            </label>        
        </>
    )
}
export default function TimerExample() {
    const [show, setShow] = useState(false);
    return(<>
    <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the Component
    </button>
    {show && <hr/>}
    {show && <PlayGround/>}
    </>)
}