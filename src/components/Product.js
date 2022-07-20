import React from "react";
import {Card,CardBody, CardTitle,CardSubtitle, CardText, CardFooter, Button, Container} from 'reactstrap';

const Product=({product})=>{
return (
    <Card>
        <CardTitle>Product</CardTitle>
        <CardBody>
            <CardSubtitle className="font-weight-bold">{product.id}</CardSubtitle>
            <CardText>{product.name}</CardText>
            <Container className="text-center">
                <Button color="danger">DEL</Button>
                <Button color="warning">UPDT</Button>
            </Container>
        </CardBody>
    </Card>
)
}

export default Product;