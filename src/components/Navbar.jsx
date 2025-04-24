import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Navbar as BSNavbar, Nav, Container, Dropdown } from "react-bootstrap";


function Navbar() {
  


  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          Electronica, Moda y Más!
        </BSNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Categorías
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item 
                to='/category/cellphones'
                as={NavLink}>
                  Cellphones
              </Dropdown.Item>
              <Dropdown.Item 
                to='/category/tvs'
                as={NavLink}>
                  Tvs
              </Dropdown.Item>
              <Dropdown.Item 
                to='/category/laptops'
                as={NavLink}>
                  Laptops
              </Dropdown.Item>
              <Dropdown.Item 
                to='/category/consoles'
                as={NavLink}>
                  Consoles
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
