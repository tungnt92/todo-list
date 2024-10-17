import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <Link to="/" className="text-blue-500">
            Home
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
