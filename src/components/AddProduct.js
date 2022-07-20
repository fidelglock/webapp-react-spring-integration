import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/backend";
import {ToastContainer, toast} from "react-toastify";

const AddProduct = () => {
    const [product, setProduct]=useState([]);
    const handleForm=(e)=>{
        console.log(product);
        sendDataToServer(product);
        e.preventDefault();
    };

    const sendDataToServer = (data) => {
        axios.post(`${base_url}/addProduct`, data).then(
            (response)=>{
                console.log(response);
                toast.success("New Product has been added !!");
            },
            (error)=>{
                console.log(error);
                toast.error("API call failed !");
            }
        );
    };

    useEffect(()=>{
        document.title="Add Product | Page | React-Spring Application";
        toast("Toast message from first hook !");
    }, []);

    return(
        <Fragment>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>Product ID</label>
                    <Input type="text" placeholder="Enter Unique Integer" name="pid" id="pid" onChange={(e)=>{ 
                       setProduct({ ...product, id: e.target.value }); 
                    }}/>
                </FormGroup>
                <FormGroup>
                <label>Product Name</label>
                <Input type="text" placeholder="Enter name of the new Product" name="pname" id="pname" onChange={(e)=>{ 
                       setProduct({...product, name: e.target.value}); 
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">ADD Product</Button>
                    <Button>CLR</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddProduct;