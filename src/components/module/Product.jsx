import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Product = () => {

    const [Items]=useState([
    {
            id: 1,
            product_name:"Product 1",
            price: 999,
            image:"/product1.jpeg",
    },
    {
        id: 2,
        product_name:"Product 2",
        price: 1999,
        image:"/product2.jpeg",
},
{
    id: 3,
    product_name:"Product 3",
    price: 2999,
    image:"/product2.jpeg",
},
{
    id: 4,
    product_name:"Product 4",
    price: 2599,
    image:"/product2.jpeg",
},
{
    id: 5,
    product_name:"Product 5",
    price: 999,
    image:"/product2.jpeg",
},
{
    id: 6,
    product_name:"Product 6",
    price: 3999,
    image:"/product2.jpeg",
}


])

  return (
    <Container className='row'>
        {Items.map((elem) => {
            return (
        <Card key={elem.id} className="col-md-3">
            <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} />
            <Card.Body>
                <Card.Title>
                    {elem.product_name}
                </Card.Title>
                <Card.Title>
                    ${elem.price}
                </Card.Title>
                <Card.Title variant="bottom">
                <Button>Buy Now</Button>
                </Card.Title>
            </Card.Body>
            
        </Card>
            );
})}
    </Container>
  )
}




export default Product