import React, { useEffect, useState } from "react"
import {CARD_LIST} from "../Card"
import "./Carousel.style.scss"


export const Carousel = ()=>{
    const [carouselIndex, setIndex] = useState(0)
    const renderCarousel = (item, i) =>{
        const setWidth = ()=>{
            if(i == carouselIndex){
                return 600
            }else{
                return 0
            }
        }
        return(
            <img className="image" style={{width: setWidth()}} src={item.img} />
        )
    }
    const increaseIndex = ()=>{
        setIndex(carouselIndex == CARD_LIST.length -1 ? CARD_LIST.length - 1 : carouselIndex + 1)
    }
    const decreaseIndex = ()=>{
        setIndex(carouselIndex == 0 ? 0 : carouselIndex - 1)
    }
    return(
        <div className="carousel-container">
            {
                CARD_LIST.map((item, i)=>renderCarousel(item,i))
            }
                <div className="arrows">
                <i class="far fa-arrow-alt-circle-left" onClick={decreaseIndex}></i>
                <i class="far fa-arrow-alt-circle-right" onClick={increaseIndex}></i>
                </div>
        </div>
    )
}