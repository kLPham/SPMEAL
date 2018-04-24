import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';

import Meals from './components/Meals/Meals';
import CustomMeals from './components/Meals/CustomMeals/CustomMeals';
import SignatureMeals from './components/Meals/SignatureMeals/SignatureMeals';
import ByLB from './components/Meals/ByLB/ByLB';
// import MealsLandingPage from './components/Meals/MealsLandingPage/MealsLandingPage';

import HowItWorks from './components/HowItWorks/HowItWorks';

//SETTING UP ROUTES:
export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Cart" component={Cart} />
    <Route
      path="/Meals"
      render={() => (
        <Meals>
          <Switch>
            <Route path="/Meals/CustomMeals" component={CustomMeals} />
            <Route path="/Meals/SignatureMeals" component={SignatureMeals} />
            <Route path="/Meals/ByLB" component={ByLB} />
            {/* <Route component={MealsLandingPage} /> */}
          </Switch>
        </Meals>
      )}
    />
    <Route path="/HowItWorks" component={HowItWorks} />
  </Switch>
);
