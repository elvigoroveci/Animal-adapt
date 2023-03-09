import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SingleAnimalPage.css"
import { useState } from "react";
import "./SingleAnimalPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouseli from "./Carouseli";
import InfotTabela from "./InfotTabela";

const SingleAnimalPage =() =>{
    
         return (
            <div className="container border rounded mt-5 ">
                <div className="row ">
                    <div className="col-sm mt-3">
                        <div className = "carousel">
                           <Carouseli /> 
                        </div>
                    </div>

                    <div className="col-sm m-1 align-baseline">
                        <div className="container-2 mt-3">
                            <h3>Emri i qenit</h3>
                            <h4>Bio, infot per qenin ... </h4>
                        <hr />
                            <InfotTabela />                            
                        </div>
                    </div>
                </div>
            </div>       
    );
}

export default SingleAnimalPage;
