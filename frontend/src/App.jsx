import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" />
          <Route path="/help" />
        </Routes>
      </>
    </Router>
  );
};

export default App;
