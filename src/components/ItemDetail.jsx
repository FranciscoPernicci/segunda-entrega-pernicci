import React from 'react'
import { Card, Container } from 'react-bootstrap'
import ItemCount from './ItemCount'

function ItemDetail({ detail }) {
  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card style={{ width: '40rem' }} className="shadow">
        <Card.Img variant="top" src={detail?.image} alt={detail?.name} />
        <Card.Body>
          <Card.Title>{detail?.name}</Card.Title>
          <Card.Text>{detail?.description}</Card.Text>
          <Card.Text><strong>$ {detail?.price}</strong></Card.Text>
          <ItemCount product={detail} />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ItemDetail
