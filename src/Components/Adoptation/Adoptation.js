import { useState } from "react";
import "./Adoptation.scss"


const Adoptation = () =>{
    const [Popup, setPopup] = useState(false);
    const [DataInputArr, setDataInputArr] = useState([]);
    const [DataInput, SetDataInput] = useState({
        name:"",
        lastname:"",
        email: "",
        location: "",
        age: 0
    });

    const ChangeEvent = (e) =>{
        SetDataInput({...DataInput,[e.target.name]: e.target.value})
    }

    let {name,lastname,email,location,age} = DataInput;

    const ChangeHandle = () =>{
        setDataInputArr([...DataInputArr,{name,lastname,email,location,age}])
        console.log(DataInputArr)
        console.log(DataInput)
        SetDataInput({name:"",lastname:"",email: "",location: "",age: ""})
    }

    return (
        <>

        <div> 
            <button onClick={() => setPopup(true)} className="AdoptBtn">Adopt</button> 
            <p>Adopt Now!</p>
        </div>    
            {Popup ? 
            <div className="PopUp"> 
                <div className="UserData">
                    <input type="text" autoComplete="off" placeholder="Name" name='Name' value={DataInput.name} onChange={ChangeEvent}/>
                    <input type="text" autoComplete="off" placeholder="Lastname" name='Lastname' value={DataInput.lastname} onChange={ChangeEvent}/>
                    <input type="text" autoComplete="off" placeholder="Email" name='Email' value={DataInput.email} onChange={ChangeEvent}/>
                    <input type="text" autoComplete="off" placeholder="Enter Your Location" name='Location' value={DataInput.location} onChange={ChangeEvent}/>
                    <input type="number" autoComplete="off" placeholder="Age" name='Age' value={DataInput.age} onChange={ChangeEvent}/>
                    <div className="buttons">
                        <button className="ClosePopup" onClick={() => setPopup(false)}>Cancel</button>    
                        <button type="submit" className="Adopt" onClick={ChangeHandle}>Adopt</button>
                    </div>
                </div>    
            </div> 
            : ""}

        </>
    )
}
export default Adoptation;