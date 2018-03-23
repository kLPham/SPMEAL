import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="overall">
        <h1 className="About">About Us</h1>
        <hr />
        <div className="AboutImage"> </div>
        <div className="midSection">
          <h1>“Making Food Simple So You Have Time To Make Yourself Great”</h1>
          <h3>
            At Spartan Performance Meals, we believe that when people have the
            freedom to chase their dreams and realize their potential, great
            things will follow. <br />We believe life’s basic needs shouldn’t
            take away from our deepest desires.
          </h3>
          <p2 className="p">
            We give people this freedom by making those basic needs simple,
            without sacrificing health, quality, or individuality. We make food
            you want..<br /> When you want it. Delivered where you need it. So
            that your life has one less interruption.{' '}
          </p2>
        </div>
        <div />
        <div className="AImage"> </div>
        <h1>The Origin Story</h1>
        <h3>
          It started with a need and a passion. The passion was bodybuilding and
          the need was food. Specific food, at specific times, multiples times a
          day. Just imagine the headache of shopping, preparing, eating, and
          cleaning 6 full meals a day, 7 days a week,<br /> along with the rest
          of the complexities of work and personal life. If we faced this
          problem, others like us must face it to. So we set out to provide a
          solution by blending the nutritional needs of fitness athletes with
          the culinary magic of a professional chef. Eating might be a necessity
          for survival, but it sure doesn’t need to be monotonous.
        </h3>
        <div className="Image2" />
        <h2>
          It was at this point that we started piecing together what would
          become our fundamental mission...
        </h2>
        <h3>
          Grocery shopping, cooking, cleaning, fast food, restaurants, TV
          dinners; these were the food options and each required sacrifices.
          Life is getting busier. Work is requiring more of our time. Family and
          friends require time. We need time for sleep. Life takes so much of
          our time that something gets sacrificed in the end. Food didn’t have
          to be a part of the equation. We shouldn’t have to choose between
          health, quality, variety, specificity, or time at the expense of the
          others just to satisfy a basic need. So we’ve made it our mission to
          make sure people don’t have to make those sacrifices.
        </h3>
        <div>
          <button className="button1">Check Out Our Weekly Menus</button>
        </div>
      </div>
    );
  }
}
