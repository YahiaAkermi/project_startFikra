import React from "react";


export default function Footer(){
    return(
        <>
        <div>
            <img src={require("../images/ESI_logo_with_text.png")} alt="esi_logo" />
        </div>
        <footer>

            <h3>En cas de problème, prière de nous contacter sur</h3>

            <div>
                <img src={require("../images/location_logo.png")} alt="" />
                <div>
                    <small>Adresse domicile</small>
                    <small>BP 73, Bureau de poste EL WIAMSidi Bel Abbés 22016, Algérie</small>
                </div>
            </div>

            <div>
                <img src={require("../images/phone_logo.png")} alt="" />
                <div>
                    <small>Téléphone/Fax</small>
                    <small>Tél : +213 48 74 94 52Fax : +213 48 74 94 50</small>
                </div>
            </div>

            <div>
                <img src={require("../images/email_logo.png")} alt="" />
                <div>
                    <small>Email</small>
                    <small>contact@esi-sba.dz</small>
                </div>
            </div>

            <div>
                <img src={require("../images/internet_logo.png")} alt="" />
                <div>
                    <small>Site web</small>
                    <small>www.esi-sba.dz</small>
                </div>
            </div>            

        </footer>

        </>
    )
}