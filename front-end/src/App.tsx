import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatStatusCodePage from './screens/Cats';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cat" element={<CatStatusCodePage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
