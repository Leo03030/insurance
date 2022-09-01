import React from "react";
import homepage from "../Img/homepage.jpg"
import "./header.css"

const Logo = () => {

    return(
        <div className="homeLogo">
            <img src={homepage} alt="homepage"/>
        </div>
    )
}


export default Logo