import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';
import {
  updateProteinSize,
  updateCarb,
  updateCarbSize,
  updateVeggies,
  updateVeggieSize
} from '../../../../ducks/selectReducer';

class SelectOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // value: []
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleSubmit(event) {
  //   alert(
  //     'You have Submitted:' +
  //       ' ' +
  //       'Protein Size:' +
  //       ' ' +
  //       this.props.ProteinSize +
  //       ', ' +
  //       'Carb:' +
  //       ' ' +
  //       this.props.Carb +
  //       ', ' +
  //       'Carb Size:' +
  //       ' ' +
  //       this.props.CarbSize +
  //       ', ' +
  //       'Veggies:' +
  //       ' ' +
  //       this.props.Veggies +
  //       ', ' +
  //       'Veggie Size:' +
  //       ' ' +
  //       this.props.VeggieSize
  //   );
  //   this.setState({ value: this.props });
  //   event.preventDefault();
  // }

  render() {
    const {
      updateProteinSize,
      updateCarb,
      updateCarbSize,
      updateVeggies,
      updateVeggieSize
    } = this.props;
    // console.log(this.handleSubmit);

    return (
      <div>
        <div style={{ fontWeight: 900 }}>
          {/* PROTEIN SIZE: */}
          <form onSubmit={this.handleSubmit}>
            <label
              className="proteinsContainer"
              style={{ fontSize: '20px', fontWeight: 900 }}
            >
              Protein Size:
              <select
                style={{ width: '100%', fontSize: '20px' }}
                // value={this.state.value}
                onChange={e => updateProteinSize(e.target.value)}
              >
                <option type="text" value="3oz">
                  3oz
                </option>
                <option type="text" value="4oz">
                  4oz
                </option>

                <option type="text" value="5oz [+$1.00 USD]">
                  5oz [+$1.00 USD]
                </option>
                <option type="text" value="6oz [+$2.00 USD]">
                  6oz [+$2.00 USD]
                </option>
                <option type="text" value="7oz [+$3.00 USD]">
                  7oz [+$3.00 USD]
                </option>
                <option type="text" value="8oz  [+$4.00 USD]">
                  8oz [+$4.00 USD]
                </option>
                <option type="text" value="9oz [+$5.00 USD]">
                  9oz [+$5.00 USD]
                </option>
                <option type="text" value="10oz [+$5.00 USD]">
                  10oz [+$5.00 USD]
                </option>
              </select>
            </label>
          </form>
          <br />
          {/* CARB: */}
          <form onSubmit={this.handleSubmit}>
            <label
              className="proteinsContainer"
              style={{ fontSize: '20px', fontWeight: 900 }}
            >
              Carb:
              <select
                style={{ width: '100%', fontSize: '20px' }}
                onChange={e => updateCarb(e.target.value)}
              >
                <option value="Carb Free">Carb Free</option>
                <option value="White Rice">White Rice</option>
                <option value="Brown Rice">Brown Rice</option>
                <option value="Sweet Potatoes">Sweet Potatoes</option>
                <option value="Red Potatoes">Red Potatoes</option>
              </select>
            </label>
          </form>
          <br />
          {/* CARB SIZE: */}
          <form onSubmit={this.handleSubmit}>
            <label
              className="proteinsContainer"
              style={{ fontSize: '20px', fontWeight: 900 }}
            >
              {' '}
              Carb Size:
              <select
                style={{ width: '100%', fontSize: '20px' }}
                onChange={e => updateCarbSize(e.target.value)}
              >
                <option value="1/2 Cup">1/2 Cup</option>
                <option value="1 Cup [+$0.25 USD]">1 Cup [+$0.25 USD]</option>
                <option value="1.5 Cup [+$0.50 USD]">
                  1.5 Cup [+$0.50 USD]
                </option>
                <option value="2 Cups [+$0.75 USD]">2 Cups [+$0.75 USD]</option>
              </select>
            </label>
          </form>
          <br />
          {/* VEGGIES: */}
          <form onSubmit={this.handleSubmit}>
            <label
              className="proteinsContainer"
              style={{ fontSize: '20px', fontWeight: 900 }}
            >
              Veggies
              <select
                style={{ width: '100%', fontSize: '20px' }}
                onChange={e => updateVeggies(e.target.value)}
              >
                <option value="No Vegetable">No Vegetable</option>
                <option value="Broccoli">Broccoli</option>
                <option value="Asparagus [+$0.75 USD]">
                  Asparagus [+$0.75 USD]
                </option>
                <option value="Green Beans">Green Beans</option>
              </select>
            </label>
          </form>
          <br />
          {/* VEGGIE SIZE: */}
          <form onSubmit={this.handleSubmit}>
            <label
              className="proteinsContainer"
              style={{ fontSize: '20px', fontWeight: 900 }}
            >
              Veggie Size:
              <select
                style={{ width: '100%', fontSize: '20px' }}
                onChange={e => updateVeggieSize(e.target.value)}
              >
                <option value="2oz">2oz</option>
                <option value="3oz">3oz</option>
                <option value="4oz [+$0.50 USD]">4oz [+$0.50 USD]</option>
                <option value="5oz [+$0.75 USD]">5oz [+$0.75 USD]</option>
                <option value="6oz [+$1.00 USD]">6oz [+$1.00 USD]</option>
                <option value="7oz [+$1.50 USD]">7oz [+$1.50 USD]</option>
                <option value="8oz [+$2.00 USD]">8oz [+$2.00 USD]</option>
              </select>
            </label>
          </form>

          {/* ==>> SECOND SECTION: <<== */}
          <div
            style={{
              marginLeft: '1.5%',
              marginTop: '5%',
              boxSizing: 'contentBox',
              width: '100%',
              padding: '.5%',
              border: '2px solid gray'
            }}
          >
            <h2
              style={{ fontWeight: 900, textAlign: 'center', fontSize: '20px' }}
            >
              Overview of your customize order:
            </h2>
            <div>
              {/* Protein Size: */}
              <div className="proteinsContainer">
                <p
                  style={{
                    fontWeight: 900,
                    marginRight: '2%'
                  }}
                >
                  1. Protein Size:
                </p>
                <p style={{ color: 'green' }}>{this.props.ProteinSize}</p>
              </div>

              {/* Carb */}
              <div className="proteinsContainer">
                <p style={{ fontWeight: 900, marginRight: '2%' }}>2. Carb:</p>
                <p style={{ color: 'green' }}>{this.props.Carb}</p>
              </div>

              {/* CarbSize, */}

              <div className="proteinsContainer">
                <p style={{ fontWeight: 900, marginRight: '2%' }}>
                  3. Carb Size:
                </p>
                <p style={{ color: 'green' }}>{this.props.CarbSize}</p>
              </div>

              {/* veggies */}

              <div className="proteinsContainer">
                <p style={{ fontWeight: 900, marginRight: '2%' }}>
                  4. Veggies:
                </p>
                <p style={{ color: 'green' }}>
                  {this.props.Veggies} <br />
                </p>
              </div>
              {/* VEggies size */}
              <div className="proteinsContainer">
                <p style={{ fontWeight: 900, marginRight: '2%' }}>
                  5. Veggie Size:
                </p>
                <p style={{ color: 'green' }}>
                  {this.props.VeggieSize} <br />
                </p>
              </div>
              {/* <input type="submit" value="Submit" /> */}
              {/* <Button
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
                color="green"
                style={{ marginLeft: '45%' }}
              >
                Submit
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ProteinSize, Carb, CarbSize, Veggies, VeggieSize } = state;

  return {
    ProteinSize,
    Carb,
    CarbSize,
    Veggies,
    VeggieSize
  };
}

export default connect(
  mapStateToProps,
  {
    updateProteinSize,
    updateCarb,
    updateCarbSize,
    updateVeggies,
    updateVeggieSize
  }
)(SelectOne);
