import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ProteinOp.css';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import VirtualizedSelect from 'react-virtualized-select';

export default class ProteinOp extends Component {
  constructor(props) {
    super(props);

    //INITIAL STATE BELOW:
    this.state = {
      selectValue1: [],
      selectValue2: [],
      selectValue3: [],
      selectValue4: [],
      selectValue5: []
    };
  }
  //HANDLE ACTION BELOW:
  //   handleValueChange = (event, index, values) => this.setState({ values });

  render() {
    // const { values } = this.state;
    const proteinSize = [
      {
        value: '3oz',
        label: '3oz'
      },
      {
        value: '4oz',
        label: '4oz'
      },
      {
        value: '5oz [+$1.00 USD]',
        label: '5oz [+$1.00 USD]'
      },
      {
        value: '6oz [+$2.00 USD]',
        label: '6oz [+$2.00 USD]'
      },
      {
        value: '7oz [+$3.00 USD]',
        label: '7oz [+$3.00 USD]'
      },
      {
        value: '8oz [+$4.00 USD]',
        label: '8oz [+$4.00 USD]'
      },
      {
        value: '9oz [+$5.00 USD]',
        label: '9oz [+$5.00 USD]'
      },
      {
        value: '10oz [+$5.00 USD]',
        label: '10oz [+$5.00 USD]'
      }
    ];
    const carb = [
      {
        value: 'Carb-Free',
        label: 'Carb-Free'
      },
      {
        value: 'White Rice',
        label: 'White Rice'
      },
      {
        value: 'Brown Rice',
        label: 'Brown Rice'
      },
      {
        value: 'Sweet Potatoes',
        label: 'Sweet Potatoes'
      },
      {
        value: 'Red Potatoes',
        label: 'Red Potatoes'
      }
    ];
    const carbSize = [
      {
        value: '1/2 Cup',
        label: '1/2 Cup'
      },
      {
        value: '1 Cup [+$0.25 USD]',
        label: '1 Cup [+$0.25 USD]'
      },
      {
        value: '1.5 Cup [+$0.50 USD]',
        label: '1.5 Cup [+$0.50 USD]'
      },
      {
        value: '2 Cups [+$0.75 USD]',
        label: '2 Cups [+$0.75 USD]'
      }
    ];
    const Veggies = [
      {
        value: 'No Vegetable',
        label: 'No Vegetable'
      },
      {
        value: 'Broccoli',
        label: 'Broccoli'
      },
      {
        value: 'Asparagus [+$0.75 USD]',
        label: 'Asparagus [+$0.75 USD]'
      },
      {
        value: 'Green Beans',
        label: 'Green Beans'
      }
    ];
    const VeggieSize = [
      {
        value: '2oz',
        label: '2oz'
      },
      {
        value: '3oz',
        label: '3oz'
      },
      {
        value: '4oz [+$0.50 USD]',
        label: '4oz [+$0.50 USD]'
      },
      {
        value: '5oz [+$0.75 USD]',
        label: '5oz [+$0.75 USD]'
      },
      {
        value: '6oz [+$1.00 USD]',
        label: '6oz [+$1.00 USD]'
      },
      {
        value: '7oz [+$1.50 USD]',
        label: '7oz [+$1.50 USD]'
      },
      {
        value: '8oz [+$2.00 USD]',
        label: '8oz [+$2.00 USD]'
      }
    ];
    return (
      <div>
        <div>
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Protein Size:
          </h2>
          <VirtualizedSelect
            options={proteinSize}
            onChange={selectValue1 => this.setState({ selectValue1 })}
            value={this.state.selectValue1}
            placeholder="-- Choose Protein Size --"
          />
        </div>
        <br />

        <div>
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Carb:
          </h2>
          <VirtualizedSelect
            options={carb}
            onChange={selectValue2 => this.setState({ selectValue2 })}
            value={this.state.selectValue2}
            placeholder="-- Choose Carb --"
          />
        </div>
        <br />
        <div>
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Carb Size:
          </h2>
          <VirtualizedSelect
            options={carbSize}
            onChange={selectValue3 => this.setState({ selectValue3 })}
            value={this.state.selectValue3}
            placeholder="-- Choose Carb Size --"
          />
        </div>
        <br />
        <div>
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Veggies:
          </h2>
          <VirtualizedSelect
            options={Veggies}
            onChange={selectValue4 => this.setState({ selectValue4 })}
            value={this.state.selectValue4}
            placeholder="-- Choose Veggies --"
          />
        </div>
        <br />
        <div>
          <h2
            className="proteinsContainer"
            style={{ fontSize: '20px', fontWeight: 900 }}
          >
            Veggie Size:
          </h2>
          <VirtualizedSelect
            options={VeggieSize}
            onChange={selectValue5 => this.setState({ selectValue5 })}
            value={this.state.selectValue5}
            placeholder="-- Choose Veggie Size --"
          />
        </div>
      </div>
    );
  }
}
