import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Mid from './components/Mid';
import Product from './components/Product';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import {ToastContainer, toast} from "react-toastify";
import {Button, Container, Row, Col} from "reactstrap";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home2 from './components/Home2';
import NavbarMenu from './components/NavbarMenu';

function App() {
  return (
    <div className="App">
      <Router>
      <ToastContainer/>
      <h1>Simple Application</h1>
            <ToastContainer/>
            <Container>
                <Row>
                    <h3>This is 1st Row </h3>
                    <Header name="Header Card" title="This is Header component re-used"/>
                </Row>
                <Row>
                    <Col md={4}>
                        <NavbarMenu/>
                    </Col>
                    <Col md={8}>
                        
                    </Col>
                </Row>
            </Container>
      </Router>
      <hr/>
      <Container className='text-center'>
        <Row>
          <Col md={6}>
          <AddProduct/>
          </Col>
          <Col md={6}>
          <AddProduct/>
          </Col>
        </Row>
      </Container>
      <AllProducts/>
    </div>
  );
}

export default App;
