import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Admin from './admin';
import CreateEmployee from './them_nv';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/eton' element={<App/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/eton/admin' element={<Admin/>}></Route>
        <Route path='/admin/create' element={<CreateEmployee/>}></Route>
        <Route path='/eton/admin/create' element={<CreateEmployee/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
