import { useState } from "react";
import "./Adoptation.scss"


const Adoptation = () =>{
    const [userInput,setUserInput] = useState('');
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
        SetDataInput({...DataInput,[e.target.name]: e.target.value,[e.target.lastname]:e.target.value,[e.target.email]:e.target.value})
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
                <form className="UserData" >
                    <input type="text"  placeholder="Name" name='Name'/>
                    <input type="text"  placeholder="Lastname" name='Lastname'/>
                    <input type="text"  placeholder="Email" name='Email' />
                    <input type="text"  placeholder="Enter Your Location" name='Location' />
                    <input type="number" placeholder="Age" name='Age'/>
                    <div className="buttons">
                        <button className="ClosePopup" onClick={() => setPopup(false)}>Cancel</button>    
                        <button type="submit" className="Adopt" onClick={ChangeHandle}>Adopt</button>
                    </div>
                </form>    
            </div> 
            : ""}

        </>
    )
}
export default Adoptation;
