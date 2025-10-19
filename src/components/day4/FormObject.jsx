import { useState } from "react"

export default function Form(){
    const [data, setData] = useState({
        fname : "",
        lname: "",
        email: ""
    })
    function handleOnchange(e){
        setData({...data, [e.target.name]: e.target.value})
    }
    //destructureing:
    const [fname, lname, email] = data;
    
    return(<form>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <label>First name: {fname}</label>
            <label>Last name: {lname}</label>
            <label>Email:  {email}</label>
        </div>  
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <input name = "fname" value={fname} placeholder="First name" onChange={handleOnchange}/>
            <input name = "lname" value={lname} placeholder="Last name" onChange={handleOnchange}/>
            <input name = "email" value={email} placeholder="email" onChange={handleOnchange}/>
        </div>
    </form>
    )
}