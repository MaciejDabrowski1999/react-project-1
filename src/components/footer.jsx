import React from "react";
import './style/footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="down container">
                <p>
                Nazwa firmy - wszelkie prawa zastrzerzone, 2019
                </p>
                <div>
                    <i className="fa-brands fa-instagram icon "></i>
                    <i className="fa-brands fa-facebook icon"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;