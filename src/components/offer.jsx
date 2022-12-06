import React, {useState} from "react";
import './style/offer.css'
import Box from "./Box";



const Offer = () =>{
    const [boxes, setBoxes] = useState([
        {id:1, name:'Usługa 1', isNew:'(Nowość!)'},
        {id:2, name:'Usługa 2', isNew:'(Nowość!)'},
        {id:3, name:'Usługa 3', isNew:'(Nowość!)'},
        {id:4, name:'Usługa 4', isNew:'(Nowość!)'},
        {id:5, name:'Usługa 5', isNew:'(Nowość!)'},
        {id:6, name:'Usługa 6', isNew:'(Nowość!)'}]);
    return(
        <section className="downColor">
            <div className="container">
                <p className="offerText">Czym zajmuje się nasza firma?</p>
                <div className="offer">
                    {
                    boxes.map((boxes) =>{return <Box key={boxes.id} boxes={boxes}/>}
                    )}
                </div>
            </div>
        </section>
    )
}

export default Offer