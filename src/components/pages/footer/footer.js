import React from "react";
import { Container } from "react-bootstrap";
import './footer.css';
// import { faLinkedinIn, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
      
           < Container fluid className="footer">
           
			{/* <Navbar navbar-expand-lg navbar-light bg-light footer-references>
				
				<Nav.Item collapse navbar-collapse id="navbarNavDropdown"> */}
					<ul navbar-nav>
						<li className="nav-item active">
							<a className="nav-link" href="http://realultimatepower.net/"><i className="fas fa-phone-alt fa-3x"></i><span
									className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link"
								href="https://github.com/Jbolton89/01-Refactoring-Existing-Code"><FaGithub /></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://twitter.com/"><FaTwitter /></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://www.linkedin.com/in/jason-bolton89/"><FaLinkedin /></a>
                        </li>

					</ul>
				{/* </Nav.Item>
			</Navbar> */}
	
           </Container>
      
	  
// {/* 
//       <Container fluid className="footer">
//         <Row md="4" className="footer-body">
//             <ul className="footer-icons">
//                 <li className="footer-social-icons">
//                 <a
//                   href="https://github.com/smj3085"
//                   style={{ color: "white" }}
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithubSquare />
//                 </a>
//               </li>
//               <li className="footer-social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/stephanie-lee-syd/"
//                   style={{ color: "white" }}
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//             </li>
//             </ul>
//         </Row>
//       </Container> */}
    );
}
  
// export default Footer;