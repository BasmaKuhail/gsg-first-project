import { useState } from "react"

type User = {
    name: string,
    age: number,
}
export default function HooksTS(){
    const [count, setCount] = useState(0)

    const [user, setUser] = useState<User | null>(null)
    
    return(<>
        <h1>count</h1>
        <button onClick={() => setCount(count +1)}>+1</button>
    </>)
}