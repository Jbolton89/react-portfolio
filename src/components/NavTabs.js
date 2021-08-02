import React from 'react'; 
import './NavTabs.css';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {Link, useLocation} from 'react-router-dom'





function NavTabs() {

    const location = useLocation();

    const routes = [
        
        {
            title: "About",
            url: '/about'
        },
        {
            title: "Projects",
            url: '/projects'
        },
        {
            title: "Resume",
            url: '/resume'
        },
        {
            title: "Contact",
            url: '/contact'
        },

    ]

    return (
        <div>

        <Navbar style={{
            backgroundColor:'darkslategray',
            expand:'md', 
            sticky:'top'
        }}
        >
            <Container>
                <Navbar.Brand 
                
                
                className={location.pathname === '/' ? 'nav-link-active' : 'nav-link'}
                >
                    <Link to="/" >Jason Bolton</Link>
                    
                    </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' 
                onClick={() => { handlePageChange ( currentPage ? false : "")}} > 
                </Navbar.Toggle> */}
                <Navbar.Collapse>
                    {routes.map((route) => {
                        return (

                            <Nav.Item key={route.title}>
                                <Link 
                                    to={route.url}
                                    className={location.pathname === route.url ? 'nav-link-active' : 'nav-link'}
                                >
                                    {route.title} 
                                </Link>
                            </Nav.Item>
                        )
                    })}       
                </Navbar.Collapse> 
            </Container>
        </Navbar>
        </div>
    );
}

export default NavTabs; 