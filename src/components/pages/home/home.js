import React from 'react';
import Resume from '../resume/resume';
import { Container, Row, Col } from "react-bootstrap";
import homeImage from '../../../assets/images/blackforest.PNG'; 

export default function Home() {
  return (
            <Container fluid>
            
                    <Row>
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
							<p> History of working in Pharmaceuticals and various other medical industries.
								Skilled in all aspects of data manipulation, and Neuroscience. Recently, learning
							    how to become a developer to further the skillset in my industry. </p>
							<p>On a personal note I am a pretty chilled out guy who enjoys football, music, 
								and video games. I have also worked in hospitalilty for over 10 years, so I enjoy drink and music culture, as well as 
								all things cocktails.
							</p>
                        </div>
                        </Col>
                    
                    </Row>
           
                
            </Container>
  );
}