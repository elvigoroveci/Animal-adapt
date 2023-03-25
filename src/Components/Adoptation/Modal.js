import { useState } from "react";
import Styles from "./Modal.scss"

const Modal = () =>{

    const[Modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!Modal)
    }
    return (
        <>
        <button onClick={toggleModal} className="btn-modal">Adopt</button>
        </>
    );
}