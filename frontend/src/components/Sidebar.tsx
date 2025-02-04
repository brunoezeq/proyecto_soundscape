import { useState } from "react";
import { Button } from "react-bootstrap";
import { FiMenu } from "react-icons/fi"; // Ícono de menú hamburguesa
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div
            className="d-flex flex-column position-fixed top-0 end-0 h-100 p-3"
            style={{ width: "200px", backgroundColor: '#3498db' }} /*cambiar aquí el color*/
        >
            {/* Logo arriba */}
            <div className="text-center mb-auto text-black">
                <h4 className="fw-bold">S</h4>
                <h4 className="fw-bold">O</h4>
                <h4 className="fw-bold">U</h4>
                <h4 className="fw-bold">N</h4>
                <h4 className="fw-bold">S</h4>
                <h4 className="fw-bold">C</h4>
                <h4 className="fw-bold">A</h4>
                <h4 className="fw-bold">P</h4>
                <h4 className="fw-bold">E</h4>
            </div>

            {/* Ícono del menú en el centro */}
            <div className="text-center mb-auto">
                <Button variant="outline-light" onClick={toggleMenu} className="border-0">
                    <FiMenu size={60} />
                </Button>
            </div>

            {/* Enlaces debajo */}
            <div className="text-center mt-auto">
                <Button variant="link" className="text-white d-block">🛒 Carrito</Button>
                <Button variant="link" className="text-white d-block">👤 Perfil</Button>
            </div>

            {/* Menú desplegable que cubre la pantalla */}
            {menuOpen && (
                <div
                    className="position-fixed top-0 start-0 h-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center"
                    style={{ width: "calc(100vw - 200px)", right: "200px", zIndex: 1050 }}
                >
                    <div className="d-flex flex-column align-items-center justify-content-center align-items-center">
                        <Row>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Inicio</Button>
                            </Col>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Productos</Button>
                            </Col>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Contacto</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Comercialización</Button>
                            </Col>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Términos de Uso</Button>
                            </Col>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Consultas</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Quiénes Somos</Button>
                            </Col>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Más vendidos</Button>
                            </Col>
                            <Col>
                                <Button variant="link" className="text-white fs-4">Novedades</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;