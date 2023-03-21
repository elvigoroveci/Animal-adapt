// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// function RegisterNewPet() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="12" controlId="validationCustom01">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Animal name"
//             defaultValue="Dogy"/>
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="12" controlId="validationCustom01">
//           <Form.Label>Breed</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Animal name"
//             defaultValue="Husky"/>
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="12" controlId="validationCustom02">
//           <Form.Label>Age</Form.Label>
//           <Form.Control
//             required
//             type="age"
//             placeholder="2"
//             defaultValue="2"/>
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="12" controlId="validationCustom01">
//           <Form.Label>Color</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Animal name"
//             defaultValue="Gray"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         {/* <Form.Group as={Col} md="12" controlId="validationCustomUsername">
//           <Form.Label>Gender</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="gender"
//               placeholder="female"
//               defaultValue="Details"
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group> */}
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//     </Form>
//   );
// }

// export default RegisterNewPet;

