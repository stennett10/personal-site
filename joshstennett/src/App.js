import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

function App() {
  return (
    
    <BrowserRouter>
      <BreakpointProvider>
        <Home />
      </BreakpointProvider>
    </BrowserRouter>
  );
}

export default App;
