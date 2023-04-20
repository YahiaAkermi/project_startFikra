import React from "react";


export default function InnovationSection(){
    return(
        <section>
            <h3>Innovation</h3>
            <div>
                   <img src={require("../images/upquotation.png")} alt="" />
                   <div>  
                            <div>
                                <img src={require("../images/ibtikar_logo.png")} alt="" />
                                <h6>IBTIKAR</h6>
                            </div>

                            <div>
                                <img src={require("../images/asjp_logo.png")} alt="" />
                                <h6>ASJP</h6>
                            </div>

                            <div>
                                <img src={require("../images/dgrsdt_logo.png")} alt="" />
                                <h6>DGRSDT</h6>
                            </div>
                            
                    </div>  
                     
                     <img src={require("../images/downquotation.png")} alt="" />

            </div>
                 
        </section>
    )
}