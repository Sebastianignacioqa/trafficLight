import React, { useState } from "react";
import "./trafficlight.css";

const TrafficLight = ()=> {
    const [color, setColor] = useState ("red");
    
    return (
    <div>
    <div className="stick"></div>
    <div className ="trafficlight">
            
            <div onClick={()=>setColor("red")} className ={"redlight" + ((color === "red") ? " glow" : "")}></div>
            <div onClick={()=>setColor("orange")} className = {"orangelight" + ((color === "orange") ? " glow" : "")}></div>
            <div onClick={()=>setColor("green")} className = {"greenlight"+ ((color === "green") ? " glow" : "")}></div>
            </div></div>)
}




export default TrafficLight