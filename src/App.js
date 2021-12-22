import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';

import { Outlet } from "react-router-dom";

import BreadCrumbs from './components/breadCrumbs'


function App() {
  return (
    <div className="App">

      <BreadCrumbs/>

      

      <Outlet/>
      
    </div>
  );
}

export default App;
