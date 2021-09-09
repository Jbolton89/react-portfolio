import React from 'react';
import Resume from '../resume/resume';
import { Container, Row, Col } from "react-bootstrap";
import homeImage from '../../../assets/images/blackforest.PNG'; 

export default function Home() {
  return (
            <Container fluid>
            
                    <Row className="vh-100">
                        <Col md={6} style={{ 
                            backgroundImage: `url(${homeImage})`, 
                            color: 'darkslategray' 
                            }} 
                            alt="" className= 'leftCol'>
                            <h1 style={{ 
                                margin: 20,
                                fontFamily: 'karla'}} className="">
                                Jason Bolton
                            </h1>
                        </Col>
                        <Col md={6} style={{ backgroundColor: 'gainsboro'}}> 
                        <div>
							
                        </div>
                        </Col>
                    
                    </Row>
           
                
            </Container>
  );
}