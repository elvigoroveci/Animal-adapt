import { useState } from "react";
import "./Adoptation.scss"


const Adoptation = () =>{
    const [Popup ,setPopup] = useState(false)
    const [userInput, setUserInput] = useState({
        name:"",
        lastname:"",
        email:"",
        location: "",
        age: 0
    })

    const handleUserInput = (e) =>{
        setUserInput({ ...userInput,[e.target.name]:e.target.value })
    }
    const submithandler = (e) =>{
        alert("form submited")
    }


    return (
        <>

        <div> 
            <button onClick={() => setPopup(true)} className="AdoptBtn">Adopt</button> 
            <p>Adopt Now!</p>
        </div>    
            {Popup ? 
            <div className="PopUp"> 
                <form className="UserData" onSubmit={submithandler}>
                    <input type="text"  placeholder="Name" name='Name' value={userInput.name}  onChange={handleUserInput}/>
                    <input type="text"  placeholder="Lastname" name='Lastname' onChange={handleUserInput}/>
                    <input type="text"  placeholder="Email" name='Email' onChange={handleUserInput}/>
                    <input type="text"  placeholder="Enter Your Location" name='Location' onChange={handleUserInput}/>
                    <input type="number" placeholder="Age" name='Age'onChange={handleUserInput}/>
                    <div className="buttons">
                        <button className="ClosePopup" onClick={() => setPopup(false)}>Cancel</button>    
                        <button type="submit" className="Adopt">Adopt</button>
                    </div>
                </form>    
            </div> 
            : ""}

        </>
    )
}
export default Adoptation;
