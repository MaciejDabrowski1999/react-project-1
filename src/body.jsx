import React from "react";
import Nav from "./components/nav";
import Banner from "./components/banner";
import Workers from "./components/workers";
import Offer from "./components/offer";
import Footer from "./components/footer";

const Body = () =>{

    return(
        <>
        <Nav/>
        <Banner/>
        <Workers/>
        <Offer/>
        <Footer/>
        </>
    )
};

export default Body;