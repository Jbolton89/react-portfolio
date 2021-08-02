import React from 'react'; 
import { Container } from 'react-bootstrap' 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <Container>

      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your name</Form.Label>
                <Form.Control as="textarea" placeholder="Name" rows={1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}}>
                Submit
            </Button>
            </Form>

    </Container> 
  );
}
