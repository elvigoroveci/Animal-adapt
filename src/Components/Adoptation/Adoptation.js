import { useState } from "react";
import "./Adoptation.scss"


const Adoptation = () =>{
    const [Popup, setPopup] = useState(false);

    return (
        <>


        <div> 
            <button onClick={() => setPopup(true)} className="AdoptBtn">Adopt</button> 
            <p>Adopt Now!</p>
        </div>    
            {Popup ? 
            <div className="PopUp"> 
                <div className="UserData">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Lastname"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Enter Your Location"/>
                    <input type="number" placeholder="Age"/>
                    <div className="buttons">
                        <button className="ClosePopup" onClick={() => setPopup(false)}>Cancel</button>    
                        <button type="submit" className="Adopt">Adopt</button>
                    </div>
                </div>    
            </div> 
            : ""}

        </>
    )
}
export default Adoptation;