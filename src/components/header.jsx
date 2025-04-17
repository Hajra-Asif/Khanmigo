import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.svg"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2">
      <Container>
        <div><img src={logo} alt="" /></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-center fw-medium gap-3 fs-5">
            <Nav.Link href="#home">Teachers</Nav.Link>
            <Nav.Link href="#link">Learners</Nav.Link>
            <Nav.Link href="#link">Parents</Nav.Link>
            <Nav.Link href="#link">WritingCoach</Nav.Link>
            <Nav.Link href="#link">Districts</Nav.Link>
           
          </Nav>
          <Button variant="primary">Get Khanmigo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;