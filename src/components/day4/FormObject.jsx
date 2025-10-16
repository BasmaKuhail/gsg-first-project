import { useState } from "react"

export default function Form(){
    const [data, setData] = useState({
        fname : "",
        lname: "",
        email: ""
    })
    return(<form>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <label>First name: {data.fname}</label>
            <label>Last name: {data.lname}</label>
            <label>Email:  {data.email}</label>
        </div>  
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <input value={data.fname} placeholder="First name" onChange={(e) => setData({...data, fname: e.target.value})}/>
            <input value={data.lname} placeholder="Last name" onChange={(e) => setData({...data, lname: e.target.value})}/>
            <input value={data.email} placeholder="email" onChange={(e) => setData({...data, email: e.target.value})}/>
        </div>
    </form>
    )
}