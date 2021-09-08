import React from'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import homeImage from '../../../assets/images/blackforest.PNG'; 
import image from '../../../assets/images/Capture.JPG'; 


function About() { 
    return ( 
            <Container fluid id="">
            
                    <Row> 
                        <Col md={6} style={{ 
                            backgroundImage: `url(${homeImage})`, 
                            color: 'darkslategray', 
                            height: 'auto'
                            }} 
                            alt="" className= 'leftCol'>
                            <h1 style={{ 
                                margin: 20,
                                fontFamily: 'karla' }} className="">
                                About Me 
                            </h1>
                            <figure className="figure">
                            <img src={image} alt="ProfilePicture" className="figure-img img-fluid rounded"/>
                                </figure>
                            
                            
                        </Col>
                        <Col md={6} style={{ backgroundColor: 'darkslategray', color: 'white'}}> 
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
    )
};

export default About; 
