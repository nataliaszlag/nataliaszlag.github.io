import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("Nav").style.top = "0";
    } else {
      document.getElementById("Nav").style.top = "-56px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div id='Nav'>
      <Navbar bg="light" expand="lg" collapseOnSelect id="main-nav">
      <Container>
        <Navbar.Brand href="./">
        <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' collapseOnSelect>
            <Nav className="justify-content-end">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#cards">Case studies</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation