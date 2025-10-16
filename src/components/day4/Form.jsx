import { useState } from "react"

export default function Form(){
    let [message, setMessage] = useState("Hi, ");
    let[isSent, setIsSent] =useState(false);

    const saveMsg =(e) => {
        setMessage(e.target.value);
        console.log(message)
    }

    if(isSent){
        return <p>Msg sent</p>
    }
    
    return(
        <>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={saveMsg}>
                </textarea>
                <button type="submit">Send</button>
            </form>
            {/* {isSent && <p>Msg sent!</p>} */}
        </>
        
    )
}