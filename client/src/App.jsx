import React from 'react';
import './App.css';
import Navbar from './components/NavBar/navbar';
import { Outlet } from 'react-router-dom';

const  App=()=>{
  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  );
}

export default App;
