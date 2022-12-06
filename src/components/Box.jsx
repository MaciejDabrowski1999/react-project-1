import React from "react";
import './style/offer.css';

const Box = ({boxes}) => {
    return(
        <div className="box">
            <div className="smCircle">{boxes.id}</div>
                <div className="smBox">
                    <p>{boxes.name}</p>
                    <p>{boxes.isNew}</p>
                </div>
        </div>
    )
};

export default Box;