import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import HowItWorks from './components/HowItWorks/HowItWorks';

//SETTING UP ROUTES:
export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Cart" component={Cart} />
    <Route path="/Shop" component={Shop} />
    <Route path="/HowItWorks" component={HowItWorks} />
  </Switch>
);
