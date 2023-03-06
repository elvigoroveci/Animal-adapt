import { useState } from "react";
import "./Adoptation.scss"

const Adoptation = () =>{
    const [Popup, setPopup] = useState(false);

    return (
        <>
        {Popup ? 
        <div className="PopUp">
            <button className="ClosePopup" onClick={() => setPopup(false)}>Close</button>
            <div className="UserData">
            <label>Name:</label>
            <input type="text" placeholder="Name"/>
            <label>Lastname:</label>
            <input type="text" placeholder="Lastname"/>
            <label>Email:</label>
            <input type="text" placeholder="Email"/>
            <label>Location:</label>
            <input type="text" placeholder="Enter Your Location"/>
            <label>Age</label>
            <input type="number"/>
            <button type="submit">Adopt</button>
            </div>
        </div> 
        : <> 
            <button onClick={() => setPopup(true)}>Adopt</button> 
            <p>Adopt Now!</p>
        </>}

        </>
    )
}
export default Adoptation;