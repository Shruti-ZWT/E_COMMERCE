import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { Link , useNavigate} from 'react-router-dom';


function Edit(){
//   console.log("vchscsx");
const navigator = useNavigate();
    const [title , setTitle] = useState("");
    const [price , setPrice] = useState("");
    const [description , setDescription] = useState("");
    const [category , setCategory] = useState("");
    const [id , setId] = useState("");


useEffect(() => {
    setTitle(localStorage.getItem('title')) ;
    setPrice(localStorage.getItem('price')) ;
    setDescription(localStorage.getItem('description')) ;
    setCategory(localStorage.getItem('category')) ;
    setId(localStorage.getItem('id')) ;
 } , [])

 const confirmation = () => {
    alert("Great!! Editted Successfully ")
 }
    return (
        <>
        <Navbar/>
        <h1 style={{textAlign: "center"}}>Edit Your Existing Details</h1>
        <div className="addcontainer">
        <h2>Title</h2>

        <input
        value={title}
        name="title"
        // onChange={(e) => setTitle(e.target.value)}
        placeholder="Add New Title"
        defaultValue={title}
        />
        <h2>Price</h2>
        <input
        placeholder="Enter Price"
        name="price"
        defaultValue={price}
        type = "text"
        // onChange={(e) => setPrice(e.target.value)}
        />
        <h2>Decription</h2>
        <textarea
        type="text"
        defaultValue={description}
        name="description" rows="5"
        placeholder = "Enter the Description"
        // onChange={(e) => setDescription(e.target.value)}
        />
        <h2>Category</h2>
        <input
        type="text"
        defaultValue={category}
        name="category" 
        placeholder = "Category"
        // onChange={(e) => setCategory(e.target.value)}
        />
        <Link to="/products">
        <button className="addbtn" onClick={confirmation}>Edit</button>
        </Link>
        <button className="backbtn" onClick={() => (navigator("/products"))}> Back</button>
        </div>
        
        </>
     
        
    )
}

export default Edit;

    //   <button onClick={Add}>Add</button>