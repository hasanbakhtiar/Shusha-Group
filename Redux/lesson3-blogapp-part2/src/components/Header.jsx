import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const  Header =()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/"><Navbar.Brand>BlogApp</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Link className='mx-5' to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          </Nav>
          <div className="d-flex">
            <Link to='/login'><Button variant="outline-danger">Login</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;