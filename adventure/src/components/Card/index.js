import React from "react"
import "./Card.style.scss"

export const CARD_LIST = [
    {title: "Sunset", img: "/images/img-1.jpg", desc: "Watch sunset"},
    {title: "Paradise", img: "/images/img-2.jpg", desc: "Travel through the Islands of Bali in a Private Cruise"},
    {title: "Ocean", img: "/images/img-3.jpg", desc: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters'},
    {title: "Football", img: "/images/img-4.jpg", desc: 'Experience Football on Top of the Himilayan Mountains'},
    {title: "City Life", img: "/images/img-5.jpg", desc: "Explore city life"},
    {title: "Crowded", img: "/images/img-6.jpg", desc: "You may like city life"},
    {title: "Nature", img: "/images/img-7.jpg", desc: "Watch nature beatifulties"},
    {title: "Desert", img: "/images/img-8.jpg", desc: 'Ride through the Sahara Desert on a guided camel tour'},
    {title: "Waterfall", img: "/images/img-9.jpg", desc: 'Explore the hidden waterfall deep inside the Amazon Jungle'},
    {title: "Rock", img: "/images/img-home.jpg", desc: "Be strong like a rock"},
]
export const Card = () =>{
    const cardItem=(item)=>{
        return(
            <div className="card-container">
                <div>
                    <img className="image" src={item.img} />
                    <p className="card-banner">{item.title}</p>
                </div>
                <h4 className="description">{item.desc}</h4>
            </div>
        )
    }
    return(
        <div className="card-area">
            {
            CARD_LIST.map((item)=>cardItem(item))
            }
        </div>
    )
}