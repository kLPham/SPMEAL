import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';

import FullMenu from './components/Meals/FullMenu/FullMenu';
import SignatureMeals from './components/Meals/SignatureMeals/SignatureMeals';
import CustomMeals from './components/Meals/CustomMeals/CustomMeals';
import ByLB from './components/Meals/ByLB/ByLB';
import Meals from './components/Meals/Meals';
import MealsDetails from './components/Meals/MealsDetails/MealsDetails';

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
            <Route path="/Meals/FullMenu" component={FullMenu} />
            <Route path="/Meals/SignatureMeals" component={SignatureMeals} />
            <Route path="/Meals/CustomMeals" component={CustomMeals} />
            <Route path="/Meals/ByLB" component={ByLB} />
            <Route path="/Meals/Details/:meals_id" component={MealsDetails} />
          </Switch>
        </Meals>
      )}
    />
    <Route path="/HowItWorks" component={HowItWorks} />
  </Switch>
);
