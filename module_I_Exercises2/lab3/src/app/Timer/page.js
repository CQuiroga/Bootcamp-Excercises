"use client";
import {useEffect, useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      // Configura un intervalo para incrementar el tiempo cada segundo
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <div style={{ margin: "auto", width: "500px", padding: "20px" }}>
        <h1>Tiempo: {time} segundos</h1>
      </div>
    );
  };
  
  export default Timer;