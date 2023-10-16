import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/esm/Nav'

export default function Sidebar() {
  return (
    <Navbar className='flex-column sidebar'>
      <Nav.Item>
        <Nav.Link href='/'>My Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/'>Matrix Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/'>Sign In</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}
