import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"; 


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2" style={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      position : "sticky", top : 0, zIndex : 1000, borderBottom : "1px solid rgb(189, 148, 187)"
    }}>
      <Container>
        <Nav.Link as={Link} to="/home">
          <img src="/assets/logo.svg" alt="Logo" />
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-center fw-medium gap-3 fs-5">

            <Nav.Link as={Link}  className={({isActive})=> isActive ? "text-info nav-link": "nav-link"}  to="/teachers">Teachers</Nav.Link>
            <Nav.Link as={Link}  className={({isActive})=> isActive ? "text-info nav-link": "nav-link"} to="/learners">Learners</Nav.Link>
            <Nav.Link as={Link}  className={({isActive})=> isActive ? "text-info nav-link": "nav-link"} to="/parents">Parents</Nav.Link>
            <Nav.Link as={Link}  className={({isActive})=> isActive ? "text-info nav-link": "nav-link"}  to="/writingcoach">WritingCoach</Nav.Link>
          </Nav>
          <Button variant="primary" href='https://www.khanacademy.org/signup?continue=%2Fkhanmigo%2Fcheckout&referral=KhanmigoSignup'>Get Khanmigo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;
