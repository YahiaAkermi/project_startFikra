import React from "react";

export default function BienvenueSection(){
    return(
        <div>
            <h2>Bienvenue sur notre plateforme</h2>
            <small>Une plateforme numérique pour gestionner et suivre les projets « un
diplôme-une startup / un diplôme-un brevet » du dépôt à la soutenance au niveau de l’école supérieure en 
informatique de SIDI BEL ABBES - 8 mai 1945 - “ESI-SBA” dans le cadre du dispositif del’arrêté 1275.
            </small>
            <img src={require("../images/large_LOGO.png")} alt="larger logo app" />
        </div>
    )
}