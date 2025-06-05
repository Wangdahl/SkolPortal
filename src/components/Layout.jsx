import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Navbar bg='light' expand='lg' className='mb-4'>
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>SkolPortal</Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar-nav' />
                    <Navbar.Collapse id='navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={NavLink} to='/' end>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/courses'>Courses</Nav.Link>
                            <Nav.Link as={NavLink} to='/news'>News</Nav.Link>
                            <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}