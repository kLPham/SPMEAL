import React, { Component } from 'react';
import './ViewMore.css';

import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';

export default class ViewMore extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="grid">
          <figure className="effect-zoe">
            {/* <img
              src="https://tympanus.net/Development/HoverEffectIdeas/img/25.jpg"
              alt="img25"
            /> */}
            <figcaption>
              <h2>View More</h2>
              {/* <p className="icon-links">
                <a href="#">
                  <span className="icon-heart" />
                </a>
                <a href="#">
                  <span className="icon-eye" />
                </a>
                <a href="#">
                  <span className="icon-paper-clip" />
                </a>
              </p> */}
              <p className="description">this meal is preCOOKED.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
{
  /* <Link to="/Meals/FullMenu">
              <button className="button1">{weeklyMenu}</button>
            </Link> */
}
