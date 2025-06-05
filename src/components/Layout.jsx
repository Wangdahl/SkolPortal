import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
    //State to track if menu is expanded or not
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar 
                bg='light' 
                expand='lg' 
                expanded={expanded}   // control open/close
                onToggle={(isOpen) => setExpanded(isOpen)}
                className='mb-4'
            >
                <Container>
                    <Navbar.Brand 
                        as={NavLink} 
                        to='/' 
                        onClick={() => setExpanded(false)} // close menu on click
                    >
                        StudentPortal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar-nav' />
                    <Navbar.Collapse id='navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={NavLink} to='/' end onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/courses' onClick={() => setExpanded(false)}>Courses</Nav.Link>
                            <Nav.Link as={NavLink} to='/news' onClick={() => setExpanded(false)}>News</Nav.Link>
                            <Nav.Link as={NavLink} to='/register' onClick={() => setExpanded(false)}>Register</Nav.Link>
                            <Nav.Link as={NavLink} to='/my-courses' onClick={() => setExpanded(false)}>My Courses</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Main content rendered here */}
            <Container className='mt-4'>
                <Outlet />
            </Container>
        </>
    )
}