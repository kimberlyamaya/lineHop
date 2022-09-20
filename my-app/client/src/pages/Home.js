import React from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Logo from "../assets/logo.png";

function Home() {
  return (
    <>
    <br></br>
    <Container>
    <Link className="navbar-brand" to="/" id="name">
      <img src={Logo} alt="-brand-logo"/>
</Link>
<Form>
      <Form.Group className="mb-3" controlId="Enter Date">
        <Form.Control type="date" placeholder="Enter Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Party Size">
        <Form.Control type="party" placeholder="Party Size" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Zip Code">
        <Form.Control type="zip-code" placeholder="Zip Code" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
    <br></br>
    <Container fluid className="shadow-lg p-3 mb-5 bg-white rounded">Available Restaurants Near You</Container>
    <Card style={{ width: '18rem', padding: '1rem', display: 'inline-block'}}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdC-8hA2nZFp2blFUCiSBPxbW7lDMvtAsuxw&usqp=CAU" />
      <Card.Body>
        <Card.Text>
        American - $$ - Los Angeles
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">8:45 PM</Card.Link>
        <Card.Link href="#">9:30 PM</Card.Link>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: '18rem', padding: '1rem', display: 'inline-block' }}>
    <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1448338794520977413/ub62S7U-_400x400.jpg" />
      <Card.Body>
        <Card.Text>
          Steakhouses - $$$ - Hollywood
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">11:30 AM</Card.Link>
        <Card.Link href="#">3:00 PM</Card.Link>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: '18rem', padding: '1rem', display: 'inline-block'}}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlxoOEeHweDOW_FJRPycitqoHcxxw7iEjPA&usqp=CAU" />
      <Card.Body>
        <Card.Text>
          Mediterranean - $$ - Los ANgeles
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">10:30 AM</Card.Link>
        <Card.Link href="#">12:15PM </Card.Link>
        <Card.Link href="#">1:00 PM</Card.Link>
      </Card.Body>
    </Card>


    </Container>
    </>
  );
}


export default Home;