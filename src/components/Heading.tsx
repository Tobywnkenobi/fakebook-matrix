import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';

export default function Heading(): JSX.Element {
  return (
    <>
      <NavBar data-bs-theme='dark' className='header'>
        <Container>
        <NavBar.Brand>Matrix Social</NavBar.Brand></Container>
        <Nav.Item>
          <Nav.Link>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Register</Nav.Link>
        </Nav.Item>
      </NavBar>
      <h1>Matrix Social</h1>
    </>
  );
}
