import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name, title}) {
    return(
        <div style={{background:"blue", padding:20}}>
            <Card className="my-2">
                <CardBody>
                <h1 className="text-center my-2">{name}</h1>
                </CardBody>
            </Card>
            
            <h2 className="text-center my-1">Lorem Ipsum - {title}</h2>
            <p>
                This is {name} component
            </p>
        </div>
    );
}

export default Header;