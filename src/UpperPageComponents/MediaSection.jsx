import React from "react";


export default function MediaSection(){
    return(
        <div>
               <a href="https://fr-fr.facebook.com/"><img src={require("../images/facebook.png")} alt="facebook" /></a>
               <a href="https://twitter.com/?lang=fr"><img src={require("../images/twitter.png")} alt="twitter" /></a>
               <a href="https://fr.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"><img src={require("../images/linkedin.png")} alt="linkedin" /></a>
        </div>
    )
}