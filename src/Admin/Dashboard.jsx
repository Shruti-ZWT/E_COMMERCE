import React from "react";
import Navbar from "../Navbar";
import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard() {
  
  const [product , setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const catogeryurl = "https://fakestoreapi.com/products/categories";
  useEffect(() => {
      axios.get(url)
      .then(res => setProduct(res.data.length))
      console.log("length " , product);

      axios.get(catogeryurl).then((response) => {
        setCategory(response.data.length);
      });
  } , [])

  return (
    <div>
      <Navbar/>
        <div className="main">
      <div className="productadmin">
        <h3>Total Product:- {product}</h3>
        <h3>Added New Data :- 0</h3>
        <h3>Deleted Data :- 0</h3>
        <h3>Edited Data Count :- 0</h3>
      </div>
      <div className="categoryadmin">
        <h3>Total Categories:- {category}</h3>
        <h3>Newly Added :- 0 </h3>
        <h3>Deleted Data Entry :- 0</h3>
        <h3>Edited Data Count :- 0</h3>
      </div>
    </div>
    <footer>
      <h3>copyright</h3>
    </footer>
    </div>
  );
}

export default Dashboard;