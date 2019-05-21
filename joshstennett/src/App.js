import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import Blog from './screens/blog';

import Portfolio from './screens/portfolio';

import { BrowserRouter, Route } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

function App() {
  return (
    
    <BrowserRouter>
      <BreakpointProvider>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div style={{width: '80vw'}}> 
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/blog" component={Blog}/>
          </div>
        </div>
      </BreakpointProvider>
    </BrowserRouter>
  );
}

export default App;
