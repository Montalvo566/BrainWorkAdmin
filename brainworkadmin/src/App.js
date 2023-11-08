import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './source/Login';
import Main from './source/Main';
import Tareas from './page/Tareas';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/tareas' element={<Tareas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
