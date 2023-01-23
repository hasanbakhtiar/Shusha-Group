import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({moviename,price}) => {
  return (
    <Col sm={12} md={4}>   
         <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{moviename}</Card.Title>
      <Card.Text>
            {price}$
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></Col>
  )
}

export default SingleCard