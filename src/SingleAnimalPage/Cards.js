


import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card className="border border-white">
         <Card.Img variant="top" className="rounded img-fluid"  src="https://www.roofus.it/immagini/blog/150.jpg" />
            <Card.Body>
             <Card.Title>Emri i kafshes</Card.Title>
                <Card.Text>
                Pershkrimi, mosha, ngjyra, gjinia...
                 </Card.Text>
              </Card.Body>
             {/* <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
     </Card>
  );
}

export default Cards;



// import React from 'react';
// import Card from 'react-bootstrap/Card';

// function Cards() {
//   return (
//     <Card style={{ width: '15rem' }}>
//       <Card.Img variant="top" src="https://www.tuttogreen.it/wp-content/uploads/2017/05/shutterstock_1018149943.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cards;