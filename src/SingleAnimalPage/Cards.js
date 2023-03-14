


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