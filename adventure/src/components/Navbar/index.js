import React, { useEffect, useState } from "react"
import {BrowserRouter, Link} from "react-router-dom"
import {Button} from "../Button"
import "./Navbar.style.scss"


export const Navbar = ()=>{
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const showButton =()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener("resize", showButton);

    const clicked = ()=>{
        setClick(s=>!s)
    }
    return(
        <div className="navbar-container">
            <BrowserRouter>
                    <Link to="/" className="nav-links" onClick={clicked} exact>
                        <div className="navbar-logo">
                           <i className="fas fa-hat-cowboy"></i>
                        </div>
                    </Link>

                    <div className="navbar-menu-logo" onClick={clicked}>
                        {!button && <i className={click ? "fas fa-times" : "fas fa-bars"}></i>}
                    </div>
                    <div className={click ? "nav-menu-container-mobile" :  "nav-menu-container"}>
                        {(button || click) &&
                        <> 
                            {click && <i className="fas fa-hat-cowboy mobile-menu-icon"></i>}
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className="nav-item" onClick={clicked}>
                                    <Link to = "/" className="nav-links">Home</Link>
                                </li>
                                <li className="nav-item" onClick={clicked}>
                                    <Link to="/services" className="nav-links">Services</Link>
                                </li>
                                <li className="nav-item" onClick={clicked}>
                                    <Link to="/products" className="nav-links">Products</Link>
                                </li>
                            </ul>
                            <Button buttonName={"Sign Up"} buttonStyle="btn--outline" buttonSize="btn--medium" />
                        </>} 
                    </div>
            </BrowserRouter>
        </div>
    )
}