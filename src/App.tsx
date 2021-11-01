import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Home from './pages/home';
import  NewPage from './pages/new';
import Minting from './pages/minting';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewPage} />
      <Route path="/minting" exact component={Minting} />
    </Router>
  );
};

export default App;
