import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url from "../api/backend";
import {ToastContainer, toast} from "react-toastify";
import {Card,CardBody, CardTitle,CardSubtitle, CardText, CardFooter, Button, Container} from 'reactstrap';

const Product=({product, update})=>{

    const deleteProduct = (id)=>{
        axios.delete(`${base_url}/removeProduct/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Product has been deleted !!");
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.error("Operation failed !");
            }
        );
    };
return (
    <Card>
        <CardTitle>Product</CardTitle>
        <CardBody>
            <CardSubtitle className="font-weight-bold">{product.id}</CardSubtitle>
            <CardText>{product.name}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{deleteProduct(product.id); }}>DEL</Button>
                <Button color="warning">UPDT</Button>
            </Container>
        </CardBody>
    </Card>
)
}

export default Product;