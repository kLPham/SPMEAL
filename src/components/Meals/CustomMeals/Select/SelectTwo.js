import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SelectTwo extends Component {
  render() {
    return (
      <div>
        <div>
          <h3 style={{ fontWeight: 900, textAlign: 'center' }}>
            Overview of your customize order:
          </h3>
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
              <p>{this.props.ProteinSize}</p>
            </div>

            {/* Carb */}

            <div className="proteinsContainer">
              <p style={{ fontWeight: 900, marginRight: '2%' }}>2. Carb:</p>
              <p>{this.props.Carb}</p>
            </div>

            {/* CarbSize, */}

            <div className="proteinsContainer">
              <p style={{ fontWeight: 900, marginRight: '2%' }}>
                3. Carb Size:
              </p>
              <p>{this.props.CarbSize}</p>
            </div>

            {/* veggies */}

            <div className="proteinsContainer">
              <p style={{ fontWeight: 900, marginRight: '2%' }}>4. Veggies:</p>
              <p>
                {this.props.Veggies} <br />
              </p>
            </div>
            {/* VEggies size */}
            <div className="proteinsContainer">
              <p style={{ fontWeight: 900, marginRight: '2%' }}>
                5. Veggie Size:
              </p>
              <p>
                {this.props.VeggieSize} <br />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <Link to="/finish">
            {' '}
            <button>Send</button>
          </Link>
          <Link to="/">
            {' '}
            <button>Start Again</button>
          </Link>
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ProteinSize: state.ProteinSize,
    Carb: state.Carb,
    CarbSize: state.CarbSize,
    Veggies: state.Veggies,
    VeggieSize: state.VeggieSize
  };
}

export default connect(mapStateToProps)(SelectTwo);
