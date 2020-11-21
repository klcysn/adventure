import React from "react"
import {CARD_LIST} from "../../components/Card"
import "./Products.style.scss"

export const Products = ()=>{
    const cardItem=(item)=>{
        return(
            <div className="products-card-container">
                <div>
                    <img className="products-card-image" src={item.img} alt="Adventure" />
                </div>
                <h4 className="products-description">{item.desc}</h4>
            </div>
        )
    }
    return(
        <div className="products-container">
            {
                CARD_LIST.map((item)=>cardItem(item))
            }
        </div>
    )
}