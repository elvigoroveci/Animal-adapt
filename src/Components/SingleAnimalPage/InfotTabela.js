import React from "react";
import "./SingleAnimalPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";


const InfotTabela =() =>{
    
         return (
                <table class="table" >                            
                    <tbody class="align-baseline" >
                        <tr>
                            <td>Breed</td>
                            <td>: Husky</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>: Male</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>: 3 years</td>
                        </tr>
                         <tr>
                            <td>Size</td>
                            <td>: Medium</td>
                        </tr>
                         <tr>
                            <td>Color</td>
                            <td>: Gray</td>
                         </tr>
                         <tr>
                            <td>Location</td>
                            <td>: Tirane</td>
                        </tr>
                         <tr>
                            <td>Published date</td>
                            <td>: 08.03.2023</td>
                        </tr>
                         <tr>
                             <td>Additional information</td>
                             <td>: Husky is a general term for a dog used in the polar regions, primarily and specifically for work as sled dogs.</td>
                        </tr>
                    </tbody>
                </table>   
    );
}

export default InfotTabela;
