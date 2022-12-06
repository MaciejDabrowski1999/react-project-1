import React from "react";
import './style/navigation.css'


const Nav = () =>{
   return (
    <nav>
        <div className="container menu">
            <div>moja firma</div>
            <div className="links">
                <a href="#about_us" className="link">o nas</a>
                <a href="#offer" className="link">oferta</a>
                <a href="#contact" aria-disabled='true' className="link contact">kontakt</a>
            </div>
        </div>
    </nav>
    ) 
    }

export default Nav