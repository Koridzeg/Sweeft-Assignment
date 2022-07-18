import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import AddContact from "./pages/AddContact";
import Dashboard from "./pages/Dashboard";
import EditContact from "./pages/EditContact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          
          <Header />
          <ToastContainer
        position="top-right"
        autoClose={5000} 
        style={{width:"50px"}}
        />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact/>} />
          </Routes>
        </div>
      </Router>

    </>
  );
};

export default App;
