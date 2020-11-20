import React, {createContext, useState} from "react"
import {HeroSection} from "../../components/HeroSection"
import {VideoModal} from "../../components/VideoModal"
import {Card} from "../../components/Card"

export const ModalToggle = createContext()
export function Home(){
    const [toggle, setToggle] = useState(false)
    const openModal =()=>{
        setToggle(s =>!s)
    }
    return(
        <>
            <ModalToggle.Provider value={{toggle, openModal}}>
                <HeroSection />
                <Card />
                <VideoModal />
            </ModalToggle.Provider>
        </>
    )
}