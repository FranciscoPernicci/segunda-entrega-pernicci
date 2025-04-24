
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Product ({product}){
    const navigate = useNavigate()

    return(
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img variant="top" src={product.image}/>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Button
                    variant="dark"
                    onClick={()=> navigate ('/product/${product.id}')}>
                        Ver más
                    </Button>
                    
                </Card.Body>
            </Card>
        </Col>
    )



}
export default Product