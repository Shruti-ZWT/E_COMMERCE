import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../Navbar";
import { Link, useNavigate } from 'react-router-dom';
import * as TiIcons from "react-icons/ti";

function Products(){
    const navigator = useNavigate();
    const [product , setProduct] = useState([]);
    const [loading , setLoading] = useState(false);

    const url = "https://fakestoreapi.com/products"
    useEffect(() => {
        setLoading(true);
        axios.get(url)
        .then(res => setProduct(res.data))
        setLoading(false);
    } , [])


    const formtable=()=>{
        return product.map((products) => {

            const setEditData = () => {
                console.log("id" , products.id)
                localStorage.setItem('ID', products.id)
                localStorage.setItem('title', products.title)
                localStorage.setItem('price', products.price)
                localStorage.setItem('category', products.category)
                localStorage.setItem('description', products.description)
            }
            return(
                <>
                {loading && (<h1> Data is fetching, Please Wait for a while!!! </h1>)}
                <tr key={products.id}>
                                <td>{products.id}</td>
                                <td>{products.title}</td>
                                <td>${products.price}</td>
                                <td>{products.description}</td>
                                <td>Rate:- {products.rating.rate} <br/> 
                                count:-{products.rating.count}</td>
                                <td >
                                    <div className="action">
                                     <Link to="/edit">
                                    <button onClick={() => setEditData(products.id)}>Edit</button>
                                    </Link>   
                                    <button onClick={() => DeleteProduct(products.id)}>Delete</button>
                                 
                                    </div>
                                </td>
                                </tr>
                                </>
            )
        })
            
        
    }

    const DeleteProduct = (id) => {
        const confirmation = prompt("Are u sure to delete?  Yes / No");
        if( confirmation === "yes"){
            alert("Successfully Done");
            fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          setProduct(
            product.filter((product) => {
              return product.id !== id;
            })
          );
        } else {
          return;
        }
      })
      .catch((error) => console.log(error));
  }else{
    alert("Delete Hold!!! Try later");
    return;
  }
        }        

    return(
        <>
        <Navbar/>
        <h1 style={{textAlign: "center"}}>PRODUCTS</h1>
        <div className="productbtn">
        <button className="back" onClick={() => (navigator("/"))}>
        <TiIcons.TiArrowBack />
            </button>  
        <Link to="/add">
        <button className="addnew"> Add New </button> 
        </Link>
        </div>
        <table >
            <thead>
                <tr>
                    <th>ID:-</th>
                    <th>Title:- </th>
                    <th>Pirce:</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            
        <tbody>{formtable()}</tbody>
        
        </table>
        </>
    )
}

export default Products