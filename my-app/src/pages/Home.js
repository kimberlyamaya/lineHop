import React from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <>
    <br></br>
    <Container>
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
    <Container fluid className="shadow-lg p-3 mb-5 bg-white rounded">Available Restaurants Near You</Container>;
    </Container>
    </>
  );
}


export default Home;