import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  updateProteinSize,
  updateCarb,
  updateCarbSize,
  updateVeggies,
  updateVeggieSize
} from '../../../../ducks/reducer';

class SelectOne extends Component {
  render() {
    const {
      updateProteinSize,
      updateCarb,
      updateCarbSize,
      updateVeggies,
      updateVeggieSize
    } = this.props;

    return (
      <div>
        <div style={{ fontWeight: 900 }}>
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Protein Size:
          </h2>
          <select
            style={{ width: '100%', fontSize: '20px' }}
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
          </select>{' '}
          <br />
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Carb:
          </h2>
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
          <br />
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Carb Size:
          </h2>
          <select
            style={{ width: '100%', fontSize: '20px' }}
            onChange={e => updateCarbSize(e.target.value)}
          >
            <option value="1/2 Cup">1/2 Cup</option>
            <option value="1 Cup [+$0.25 USD]">1 Cup [+$0.25 USD]</option>
            <option value="1.5 Cup [+$0.50 USD]">1.5 Cup [+$0.50 USD]</option>
            <option value="2 Cups [+$0.75 USD]">2 Cups [+$0.75 USD]</option>
          </select>
          <br />
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Veggies:
          </h2>
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
          <br />
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Veggie Size:
          </h2>
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
