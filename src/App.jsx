import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Product from "./pages/product";
import axios from "./axios";
import CustomFullScreenLoader from "./components/atoms/loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useState(() => {
    axios.get("/").then(() => setLoading(false));
  }, []);

  return loading ? (
    <CustomFullScreenLoader />
  ) : (
    <React.Fragment>
      <ToastContainer autoClose="3000" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
