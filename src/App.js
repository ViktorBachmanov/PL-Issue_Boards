import React, { useState } from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';

import BreadCrumbs, { PathContext } from './components/breadCrumbs';

function App() {
  const [path, setPath] = useState('');

  return (
    <PathContext.Provider value={{ path, setPath }}>
      <div className="App">
        <BreadCrumbs />

        <Outlet />
      </div>
    </PathContext.Provider>
  );
}

export default App;
