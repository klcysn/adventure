import React from "react";
import {Link} from "react-router-dom"
import "./Button.style.scss"

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"]
export const Button = ({buttonName, type, onClick, buttonStyle,buttonSize})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link >
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >{buttonName}</button>
        </Link>
    )
}