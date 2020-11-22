import React from "react"
import "./Card.style.scss"

export const CARD_LIST = [
    {title: "Sunset", img: "https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/article-images/129338/slideshow-1590737985.jpg", desc: "Watch sunset"},
    {title: "Paradise", img: "https://media.timeout.com/images/105240189/image.jpg", desc: "Travel through the Islands of Bali in a Private Cruise"},
    {title: "Ocean", img: "https://30a.com/wp-content/uploads/2018/05/untitled-design-425.jpg", desc: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters'},
    {title: "Football", img: "https://i.pinimg.com/originals/f5/64/90/f56490519bc4e0463bab091316537e92.jpg", desc: 'Experience Football on Top of the Himilayan Mountains'},
    {title: "City Life", img: "https://f4.bcbits.com/img/a3695352208_10.jpg", desc: "Explore city life"},
    {title: "Crowded", img: "https://images.fineartamerica.com/images-medium-large-5/1-crowded-street-aedphotography-fine-art-.jpg", desc: "You may like city life"},
    {title: "Nature", img: "https://www.gulftoday.ae/-/media/gulf-today/images/articles/lifestyle/2019/4/15/nature.ashx?h=450&w=750&hash=A5F93BBB4FC839BB2A620535F62AB7F9", desc: "Watch nature beatifulties"},
    {title: "Desert", img: "https://media.cntraveler.com/photos/57211a96fe5fd76f60bc2764/16:9/w_1600,c_limit/deserts-Sahara-cr-GettyImages-74732427.jpg", desc: 'Ride through the Sahara Desert on a guided camel tour'},
    {title: "Waterfall", img: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/02/08/1331843871751_1/the-stunning-kaieteur-falls-and-their-high-plunge", desc: 'Explore the hidden waterfall deep inside the Amazon Jungle'},
    {title: "Rock", img: "https://i.redd.it/biosq341del31.jpg", desc: "Be strong like a rock"},
]
export const Card = () =>{
    const cardItem=(item)=>{
        return(
            <div className="card-container">
                <div>
                    <img className="card-image" src={item.img} alt="adventure" />
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