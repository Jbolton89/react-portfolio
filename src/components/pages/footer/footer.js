import React from "react";
import { Container } from "react-bootstrap";
import './footer.css';
// import { faLinkedinIn, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaLinkedin, FaGithubSquare, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
      
           <Container fluid className="footer">
           
			<Navbar navbar-expand-lg navbar-light bg-light>
				
				<Nav.Item collapse navbar-collapse className="footer-references">
					<ul navbar-nav>
						<li className="nav-item active">
							<a className="nav-link" href="http://realultimatepower.net/"><FaPhoneAlt /><span
									className="sr-only"></span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link"
								href="https://github.com/Jbolton89/01-Refactoring-Existing-Code"><FaGithubSquare /></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://twitter.com/"><FaTwitter /></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://www.linkedin.com/in/jason-bolton89/"><FaLinkedin /></a>
                        </li>

					</ul>
				</Nav.Item>
			</Navbar>
	
           </Container>
    );
}
  
// export default Footer;