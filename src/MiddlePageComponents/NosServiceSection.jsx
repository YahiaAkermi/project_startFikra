import React from "react";


export default function NosServiceSection(){
    return(
        <section> 

                    <div>
                        <div>
                             <img src={require("../images/planification_logo.png")} alt="" />
                        </div>
                        <h4>Planification</h4>
                        <small>Planification de la soutenance</small>
                    </div>
                    <div>
                        <div>
                             <img src={require("../images/validation_logo.png")} alt="" />
                        </div>
                        <h4>Validation</h4>
                        <small>Des projets par le comité et le conseil scientifiquede l’école</small>
                    </div>
                    <div>
                        <div>
                             <img src={require("../images/suivi_logo.png")} alt="" />
                        </div>
                        <h4>Suivi</h4>
                        <small>Suivi de l’etat d’approbationet de l’avancementdu projet</small>
                    </div>
                    <div>
                        <div>
                             <img src={require("../images/annonce_logo.png")} alt="" />
                        </div>
                        <h4>Annonces</h4>
                        <small>gestionner les annoncesdes formations</small>
                    </div>
                    <div>
                        <div>
                             <img src={require("../images/notification_logo.png")} alt="" />
                        </div>
                        <h4>Notifications</h4>
                        <small>gestionner les notifications</small>
                    </div>

        </section>
    )
}