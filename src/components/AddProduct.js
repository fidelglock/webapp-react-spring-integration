import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddProduct = () => {
    return(
        <Fragment>
            <Form>
                <FormGroup>
                    <label>Product ID</label>
                    <Input type="text" placeholder="Enter Unique Integer" name="pid" id="pid"/>
                </FormGroup>
                <FormGroup>
                <label>Product Name</label>
                <Input type="text" placeholder="Enter name of the new Product" name="pname" id="pname"/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">ADD Product</Button>
                    <Button>CLR</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddProduct;