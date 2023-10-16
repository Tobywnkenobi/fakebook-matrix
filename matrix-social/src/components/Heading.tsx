import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom'

export default function Heading(): JSX.Element {
  return (
    <>
      <Navbar sticky='top' data-bs-theme='dark' className='header'>
        <Container>
        <Navbar.Brand as={NavLink} to='/'>Matrix Social</Navbar.Brand></Container>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
        </Nav.Item>
      </Navbar>
    </>
  );
}