import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#"><h3>Giant African Snail</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contacts</Nav.Link>
              {/* <Nav.Link href="contact">Online </Nav.Link> */}
              <Nav.Link href="login">Sign In</Nav.Link>
              {/* <a class="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="#">Download</a> */}
            </Nav>
            <br></br>
            <i class="bi bi-cart3"></i>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;