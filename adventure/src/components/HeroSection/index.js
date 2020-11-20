import React, { useEffect, useState } from "react";
import {Button} from "../Button"
import "./HeroSection.style.scss"

export function HeroSection(){
    const [big, setBig]=useState(false)
    const bigger =()=>{
        if(window.innerWidth <= 960){
            setBig(true)
        }else{
            setBig(false)
        }
    }
    useEffect(()=>{
        bigger()
    },[])

    window.addEventListener("resize", bigger)
    
    return(
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>ADVENTURE</h1>
            <div className="hero-btns" style={{flexDirection: big ? "column" : "row"}}>
                <Button className="btns" buttonName="GET STARTED" buttonStyle="btn--outline" buttonSize="btn--large" />
                <div className="play-container">
                    <Button className="btns" buttonName = "Watch Trailer" buttonStyle="btn--primary" buttonSize="btn--large" />
                    <i class="fas fa-play-circle"></i>
                </div>
            </div>
        </div>
    )
}