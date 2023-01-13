import React, { Suspense, useEffect } from "react";
import {Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import Login from "../Pages/Login";
import Products from "../Admin/Products";
import Create from "../Admin/Create/Create";
import Edit from "../Admin/Edit/Edit";
import Category from "../Admin/Category";

const AppRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Suspense fallback="Loading ...">
      <Routes>
        <Route exact path="/" element={ <Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Create/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
