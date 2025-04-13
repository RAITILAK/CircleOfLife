import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import EnquirePage from "./pages/EnquirePage";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enquire" element={<EnquirePage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
