import React from "react";

import { Routes, Route } from "react-router-dom";
import Doctors from "../pages/Doctors";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Services from "../pages/Services";
import Faq from "../pages/Faq";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
