import React from "react";



export default function Navbar(){
    return(
    <div className="navbar">
       <img src={require("../images/LOGO.png")} alt="logo_start_fikra" />   
       <div className="myNavigation">
                <div>
                    <h4>Innovation</h4>
                </div>
                <div>
                    <h4>Nos services</h4>
                </div>
                <div>
                    <h4>Contactez-nous</h4>
                </div>
                <div>
                    <h4>Acceuil</h4>
                </div>
       </div> 
    </div>   

    )
}