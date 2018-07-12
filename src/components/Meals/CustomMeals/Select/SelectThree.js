import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import {
  updateProteinSize
  //   updateCarb,
  //   updateCarbSize,
  //   updateVeggies,
  //   updateVeggieSize
} from '../../../../ducks/selectReducer';

class SelectThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMealOptions: []
    };
  }

  componentDidMount() {
    axios.get('/api/meal_options').then(response => {
      this.setState({ displayMealOptions: response.data });
      //   console.log('all meal options just went through', response);
    });
  }

  render() {
    const {
      updateProteinSize
      //   updateCarb,
      //   updateCarbSize,
      //   updateVeggies,
      //   updateVeggieSize
    } = this.props;

    const allOptions = this.state.displayMealOptions.map(allOptions => {
      return (
        <div>
          <div style={{ fontWeight: 900 }} key={allOptions.id}>
            <h2
              className="proteinsContainer"
              style={{ fontSize: '20px', fontWeight: 900 }}
            >
              {/* Protein Size: */}
            </h2>
            {/* <p>{allOptions.name}</p>
            <p>{`${allOptions.option1}${allOptions.option2}`}</p> */}
            {/* <select>
              <option>Select Protein Size</option>
              {allOptions.options
                .split(',')
                .map(options => <option>{options} </option>)}
            </select> */}
            <select>
              <option>Select Protein Size</option>
              <option>{`${allOptions.options}${allOptions.priceAdded}`}</option>
            </select>
            {/* <select
              style={{ width: '100%', fontSize: '20px' }}
              onChange={e => updateProteinSize(e.target.value)}
              key={allOptions.id}
              value={allOptions.name}
            >
              <option
                type="text"
                value={`${allOptions.option1}${allOptions.option2}`}
              >
        
              </option> */}

            {/* ///testing// */}
            {/* this.state = { slug: '' }

<select>
    data && data.map((datum, i) => { return (
    <option
         value={datum.id}
         key={i}
         onChange={e => this.setState({ slug: datum.slug })}>
             {datum.name}
    </option>
    )})}
<select> */}

            {/* //////// */}
            {/* <option
                type="text"
                value="5oz [+$1.00 USD]"
                onChange={e => this.setState({ price: price })}
              >
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
              <option value="8oz [+$2.00 USD]">8oz [+$2.00 USD]</option>*/}
            {/* </select> */}
          </div>
        </div>
      );
    });

    return <div>{allOptions}</div>;
  }
}

function mapStateToProps(state) {
  //   const { ProteinSize, Carb, CarbSize, Veggies, VeggieSize } = state;
  const { ProteinSize } = state;

  return {
    ProteinSize
    // Carb,
    // CarbSize,
    // Veggies,
    // VeggieSize
  };
}

// export default connect(
//   mapStateToProps,
//   {
//     updateProteinSize,
//     updateCarb,
//     updateCarbSize,
//     updateVeggies,
//     updateVeggieSize
//   }
// )(SelectOne);
export default connect(
  mapStateToProps,
  {
    updateProteinSize
  }
)(SelectThree);
