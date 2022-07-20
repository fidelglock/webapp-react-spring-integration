import React from "react";
import {Button} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Mid() {
    const buttonHandler = () => {
        toast.success("Toastify is triggered !", {position:"top-center"});
    };
    return(
        <div>
            <h1>Middle</h1>
            <ToastContainer/>
            <h2>Lorem Ipsum</h2>
            <p>
                This is middle component
            </p>
            <Button color="warning" onClick={buttonHandler}>Click</Button>
        </div>
    );
}

export default Mid;