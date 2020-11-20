import React from "react"


const CARD_LIST = [
    {title: "Sunset", img: "/images/img-1.jpg"},
    {title: "Paradise", img: "/images/img-2.jpg"},
    {title: "Ocean", img: "/images/img-3.jpg"},
    {title: "Football", img: "/images/img-4.jpg"},
    {title: "City Life", img: "/images/img-5.jpg"},
    {title: "Crowded", img: "/images/img-6.jpg"},
    {title: "Nature", img: "/images/img-7.jpg"},
    {title: "Desert", img: "/images/img-8.jpg"},
    {title: "Waterfall", img: "/images/img-9.jpg"},
    {title: "Rock", img: "/images/img-home.jpg"},
]
export const Card = () =>{
    const cardItem=(item)=>{
        return(
            <div>
                <img src={item.img} />
            </div>
        )
    }
    return(
        <div>
            {
            CARD_LIST.map((item)=>{
                cardItem(item)
            })
            }
        </div>
    )
}