import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./components/Login";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<div>None</div>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/about" element={<div>About Page</div>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

/*
TODO:
  2. figure out how typescript goes with reacts jsx or whatever
  3. figure out how the typescript compiles down to javascript in the context of a react project (try to do it on save)
  4. create a simple login form and figure out how to send the get request to the backend

  FC is a builtin react type that can be imported from react
    - defaults to children prop
    - use an interface to describe the properties provided (FC<Interface>)
    - use to guarantee that when that component is used, the prop is provided with it
    - never use any in docs
*/