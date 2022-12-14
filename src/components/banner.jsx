import React from "react";
import './style/banner.css'

const Banner = ()=>{
    return(
        <section className="shadow">
            <div className="picture"></div>
            <section className="container">
                <div className="aboutUs" id="about_us">
                    <h1 className="header">Nasza firma oferuje najwyższej jakości produkty.</h1>
                    <p className="middleText">Nie wierz nam na słowo - sprawdź</p>
                    <a href="#offer"><button className="button">Oferta</button></a>
                </div>
            </section>
        </section>
    )
};

export default Banner
