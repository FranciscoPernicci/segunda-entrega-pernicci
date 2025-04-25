
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function Product ({product}){
    const navigate = useNavigate()

    return(
        
        <Col md={6} lg={4}>
            <Card className='mb-4 h-100'>
                <Card.Img variant="top" src={product.image}/>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
                <Button
                    variant="dark"
                    onClick={() => navigate(`/product/${product.id}`)}
>
                        Ver más
                    </Button>
                    
                </Card.Body>
            </Card>
        </Col>
    )



}
export default Product