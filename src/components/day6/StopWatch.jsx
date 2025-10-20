import { useRef, useState } from "react"

export default function StopWatch(){

    const [startTimer, setStartTimer]= useState(null);
    const [now, setNow]= useState(null);
    const intervalRef = useRef(null);

    function handleStart(){
        setStartTimer(Date.now);
        setNow(Date.now);

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=> {
            setNow(Date.now);
        }, 10);
    }

    function handleStop(){
        clearInterval(intervalRef.current);

    }

    let secondsPassed = 0;
    if (startTimer != null && now != null){
        secondsPassed = (now -startTimer) / 1000;
    }
    return(<>
    <h1>Time passed: {secondsPassed.toFixed(3)}</h1>

    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </>)
}