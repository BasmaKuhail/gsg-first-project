import { useState } from "react"

export default function UpdateState(){
    const [to, setTo] = useState("Alice");
    const [msg, setMsg] = useState("Hi, ");

    console.log(msg)
    console.log(to)

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=> {alert(`sending ${msg} to ${to}`)}, 2000)
    }
    return(<>
        <form onSubmit={handleSubmit}>
            <label> To {" "}</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
                <option value={"Alice"}>Alice</option>
                <option value={"Basma"}>Basma</option>
            </select>
            <textarea
                placeholder="Message"
                value={msg}
                onChange={(e)=> setMsg(e.target.value)}/>
            <button type="submit"> Sent </button>
        </form>
    </>)
}