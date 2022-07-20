import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom";
const NavbarMenu = () => {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/all-products" action>
                All Products
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-product" action>
                Add Product
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
                Contact
            </Link>
        </ListGroup>
    );
};

export default NavbarMenu;