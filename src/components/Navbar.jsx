import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const { totalUnidades } = useCart(); // Trae correctamente la función del contexto

  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          Electronica y Computación.
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Categorías
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/category/cellphones">Cellphones</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/category/tvs">TVs</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/category/laptops">Laptops</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/category/consoles">Consoles</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          {/* Cart Icon a la derecha */}
          <Nav>
            <Nav.Link as={Link} to="/cart" style={{ position: "relative" }}>
              <FaShoppingCart size={30} />
              {totalUnidades() > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    transform: "translate(50%, -50%)"
                  }}
                >
                  {totalUnidades()}
                </span>
              )}
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
