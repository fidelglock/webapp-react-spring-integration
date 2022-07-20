import React from "react";
import {Button, Container, Row, Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Header from "./Header";
import NavbarMenu from "./NavbarMenu";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddProduct from "./AddProduct";
import Home from "./Home";
import AllProducts from "./AllProducts";
import Home2 from "./Home2";

//import {Jumbotron, Container} from 'reactstrap';

function Main() {
    const buttonHandler = () => {
        toast("Alert from toastify !");
    };
    return(
        <div className="text-center">
           <Router>
            <h1>Simple Application ***PAGE COMPONENT***</h1>
            <ToastContainer/>
            <Container>
                <Row>
                    <h3>This is 1st Row </h3>
                    <Header name="Reserved Header Card" title="This is Header component re-used from PAGE COMPONENT"/>
                </Row>
                <Row>
                    <Col md={4}>
                        <NavbarMenu/>
                    </Col>
                    <Col md={8}>
                        <Route path="/" component={Home2} exact />
                        <Route path="/addProduct" component={AddProduct} exact />
                        <Route path="/allProducts" component={AllProducts} exact />
                    </Col>
                </Row>
            </Container>
            <h2>Bootstrap enabled</h2>
            <p>
                This is the footer of the PAGE COMPONENT
            </p>
            <Button color="primary" outline onClick={buttonHandler}>Okay !</Button>
            </Router>
        </div>
    );
}

export default Main;