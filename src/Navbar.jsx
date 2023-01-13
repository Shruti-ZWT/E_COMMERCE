import React from "react";
import {useNavigate } from "react-router-dom";
import ToolBar from "./Admin/ToolBar";
import { useState , useEffect } from "react";

function Navbar() {

  const[username,setUsername]=useState("")

  useEffect(()=>{
      setUsername(localStorage.getItem('username'));
  },[])

  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
    <div className="navbar_container">
      <div>
       <ToolBar/>
      </div>
        <div className="title">
        Shopping Website 
        </div>
      <div className="navbar_wrapper">
          <h1 style={{color: "white"}}>{username}  </h1>
          <button onClick={() => handlelogout()} className="logout">LOGOUT</button>
      </div>
    </div>
  
    </>
  );
}
export default Navbar;