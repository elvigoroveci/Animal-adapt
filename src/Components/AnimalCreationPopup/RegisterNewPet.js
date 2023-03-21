import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RegisterNewPet() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Animal name"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Animal breed"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            required
            type="gender"
            placeholder="Animal gender"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Size</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Animal size"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="age"
            placeholder="Animal age"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom06">
          <Form.Label>Color</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Animal color"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom07">
          <Form.Label>Additional info</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Info"
            defaultValue=""/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="" controlId="validationCustom08">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom09">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom10">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              feedbackType="invalid"
            />
          </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      
      <Button type="submit" variant="secondary" className="rounded-pill bg-warning text-dark btn-hover-border-shade-amount">Check info</Button>
    </Form>
  );
}

export default RegisterNewPet;

