import React from "react";
import { Link } from "react-router-dom";
import ProductCard from './Item'; // Asegurate que este es el que devuelve un <Col>
import { Container, Row } from 'react-bootstrap';

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return <p>Cargando productos, por favor espere unos segundos...</p>;
  }

  return (
    <Container className="mt-4">
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
