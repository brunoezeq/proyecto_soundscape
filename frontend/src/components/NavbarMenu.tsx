import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarMenu = ()=> {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Soundscape</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Perfil</Nav.Link>
                        <NavDropdown title="Más" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Quienes Somos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Comercialización</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Consultas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Términos de Uso</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.5">Contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;