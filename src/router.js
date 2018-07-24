import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

import Login from './components/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import FullSizeCartView from './components/Cart/FullSizeCartView';

import FullMenu from './components/Meals/FullMenu/FullMenu';
import SignatureMeals from './components/Meals/SignatureMeals/SignatureMeals';

import CustomMeals from './components/Meals/CustomMeals/CustomMeals';
import CustomizeYourMeal from './components/Meals/CustomMeals/CustomizeYourMeal';
import Details from './components/Meals/CustomMeals/Details';

import ByLB from './components/Meals/ByLB/ByLB';
import FeaturedBreakfast from './components/Meals/FeaturedBreakfast/FeaturedBreakfast';
import FeaturedLnD from './components/Meals/FeaturedLnD/FeaturedLnD';
import Dessert from './components/Meals/Dessert/Dessert';
import Meals from './components/Meals/Meals';
import MealsDetails from './components/Meals/MealsDetails/MealsDetails';

import HowItWorks from './components/HowItWorks/HowItWorks';
import FAQ from './components/Contact/FAQ/FAQ';
import StoreLocator from './components/Contact/StoreLocator/StoreLocator';
import CheckoutWStripe from './components/CheckoutWStripe';
import PaymentSuccess from './components/PaymentSuccess';
//SETTING UP ROUTES:
export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Cart" component={Cart} />
    {/* <Route
      path="/Cart"
      render={() => (
        <Cart>
          <Switch>
            <Route path="/FullSizeCartView" component={FullSizeCartView} />
          </Switch>
        </Cart>
      )}
    /> */}

    <Route path="/FullSizeCartView" component={FullSizeCartView} />
    <Route path="/Meals/Details/:meals_id" component={MealsDetails} />
    <Route path="/Customize_meals/Details/:meals_id" component={Details} />
    <Route
      path="/Meals"
      render={() => (
        <Meals>
          <Switch>
            <Route path="/Meals/FullMenu" component={FullMenu} />
            <Route path="/Meals/SignatureMeals" component={SignatureMeals} />
            <Route path="/Meals/CustomMeals" component={CustomMeals} />
            <Route
              path="/Meals/CustomizeYourMeal"
              component={CustomizeYourMeal}
            />
            <Route path="/Meals/ByLB" component={ByLB} />
            <Route
              path="/Meals/FeaturedBreakfast"
              component={FeaturedBreakfast}
            />
            <Route path="/Meals/FeaturedLnD" component={FeaturedLnD} />
            <Route path="/Meals/Dessert" component={Dessert} />
          </Switch>
        </Meals>
      )}
    />
    <Route path="/HowItWorks" component={HowItWorks} />
    <Route path="/Support/FAQ" component={FAQ} />
    <Route path="/Support/StoreLocator" component={StoreLocator} />
    <Route path="/CheckoutWStripe" component={CheckoutWStripe} />
    <Route path="/PaymentSuccess" component={PaymentSuccess} />
  </Switch>
);
