import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterNewPet from './RegisterNewPet';


function AnimalCreationPopup () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
        
      <Button className="rounded-pill btn-success btn-hover-border-shade-amount" onClick={handleShow} 
        style={{
            marginTop: 100,
            width: 500,
            height: 60,
            fontSize: 30}}>
            Register a new Pet!!!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <RegisterNewPet />
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" className="rounded-pill bg-light text-dark " onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" className="rounded-pill bg-success btn-lg btn-hover-border-shade-amount" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AnimalCreationPopup;