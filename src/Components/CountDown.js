import React, { useEffect, useState } from "react";

export default function CountDown(){
    // intail time 40days 22hours 60min 20s
    // convert to the simplest unit => s
    const initialTime = (40 * 24 * 60 * 60) + (22 * 60 * 60) + (60 * 60) + 20;
    // state time left starts with the intail time
    const[timeLeft , setTimeLeft] = useState(initialTime)
    // stop if 0 and decrease if not
    useEffect(()=>{
        if (timeLeft <= 0) return; // Stop if time has reached 0
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1); 
        }, 1700); // Run every second ,, everytime decrease with in second after 1ms
        return () => clearInterval(timer);
    },[timeLeft])
    // Step 3: Convert total seconds into days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;
    return(
    <div className="container count-down text-center">
        <h4>{days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds</h4>
    </div>
    )
}