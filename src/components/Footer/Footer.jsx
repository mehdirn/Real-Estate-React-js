import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="padding innerWidth flexCenter f-container">
                {/* left side */}
            <div className="flexColStart f-left">
                        <img src="/logo2.png" width={120}/>
                    <span className="secondaryText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et 
                    </span> 
            </div>
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText" >144 New York , Fl 6456 , fL 4646 , USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Footer