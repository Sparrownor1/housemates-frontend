import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<div>None</div>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/about" element={<div>About Page</div>}/>
          <Route path = "/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

/*
TODO:
  Add state library to maintain JWT
  Incorporate Axios
  Do these with folder structure (modularize)
*/