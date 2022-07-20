import React, { useState, useEffect } from "react";
import Product from "./Product";
import base_url from "../api/backend";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";





const AllProducts=()=>{
    let APIURL = "https://spring-mongo-backend.herokuapp.com/";
    useEffect(()=>{
        alert("useEffect HOOK has been triggered");
        document.title="React | SpringBoot | Application";
        toast("Toast message from first hook !");
    }, []);

    const getProducts=()=>{
        axios.get(`${base_url}/allProducts`).then(
            (response)=>{
                console.log(response.data);
                toast.success("API call successful !!");
                setProduct(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("API call failed !");
            }
        );
    };
    const makeAPICall = async () => {
        try {
          const response = await fetch('https://spring-mongo-backend.herokuapp.com/allProducts', {mode:'cors'});
          const data = await response.json();
          console.log({ data });
          toast.success("API call successful !!");
          setProduct(data);
        }
        catch (e) {
          console.log(e);
          toast.error("API call failed !");
        }
      };
      const fetchApiData = (url) => {
        try{
            const res = fetch(url);
        }
        catch (e){
            console.log(e);
        }

      };
    useEffect(()=>{
        console.log("Triggering 2nd Hook");
        makeAPICall();
        //getProducts();
        //fetchApiData(APIURL);
    }, []);

    
    const [product, setProduct]=useState([]);
    return(
        <div>
            <h1>All Products</h1>
            <p>List of all products are as follows ***DYNAMIC COMPONENT***</p>
            {
                product.length>0? product.map((item)=>
                <Product key={item.id} product={item}/>) : "Inventory is empty"
            }
        </div>
    );
};

export default AllProducts;