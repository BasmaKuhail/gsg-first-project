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
    return(<form>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <label>First name: {data.fname}</label>
            <label>Last name: {data.lname}</label>
            <label>Email:  {data.email}</label>
        </div>  
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <input name = "fname" value={data.fname} placeholder="First name" onChange={handleOnchange}/>
            <input name = "lname" value={data.lname} placeholder="Last name" onChange={handleOnchange}/>
            <input name = "email" value={data.email} placeholder="email" onChange={handleOnchange}/>
        </div>
    </form>
    )
}