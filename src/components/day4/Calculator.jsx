import { useState } from "react"

let xSelect = true;

export default function Calculate(){

    const [myCalc, setMyCalc] = useState({
        result: 0,
        x:0,
        y:0,
        opp: '',
    });

    function handleOppration(e){
        setMyCalc({...myCalc, opp:[e.target.name]})
    }

    function handleNumClic(e){
        // console.log(xSelect)
        if(xSelect){
            console.log("in")
            setMyCalc({...myCalc, x:[e.target.name]})
            
        }else{
            setMyCalc(() => ({...myCalc, y:[e.target.name]}))
        }
        xSelect = !xSelect
        // console.log(xSelect)
    }

    function findRes(){
        console.log(myCalc.opp)

        if(myCalc.opp == '+'){
            setMyCalc({...myCalc, result:(myCalc.x + myCalc.y)})
        }else if(myCalc.opp == '-'){
            setMyCalc({...myCalc, result:(myCalc.x - myCalc.y)})
        }else if(myCalc.opp == '*'){
            setMyCalc({...myCalc, result:(myCalc.x * myCalc.y)})
        }else if(myCalc.opp == '/'){
            setMyCalc({...myCalc, result:(myCalc.x / myCalc.y)})
        }
        console.log(myCalc.result)
    }
    return(<div style={{display:"flex", flexDirection:"column", backgroundColor:"blue", padding:"20px", width:"300px"}}>
        <form onSubmit={(e) => {
                e.preventDefault();
                
            }}>
            <div style={{display:"flex", flexDirection:"column", gap:"10px", marginBottom:"20px"}}>
                <label>{myCalc.x} {myCalc.opp} {myCalc.y}</label>
            </div>

            <div style={{display:"flex", gap:"10px", marginBottom:"20px", flexWrap:"wrap", justifyContent:"space-between"}}>
                {[0,1,2,3,4,5,6,7,8,9].map((number => <button name={number} onClick={handleNumClic}>{number}</button>))}
            </div>

            <div style={{display:"flex", flexDirection:"row", gap:"10px", justifyContent:"space-between"}}>
                {['+', '-', '*', '/'].map((opp => <button name={opp} onClick={handleOppration}>{opp}</button>))}
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"20px", justifyContent:"space-between", marginTop:"20px"}}>
                <label style={{padding:"10px", backgroundColor:"white", borderRadius:"10px", color:"black"}}>Result: {myCalc.result}</label>
                <button onClick={findRes}type="submit">=</button>
            </div>
        </form>
    </div>)
}