import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ProteinOption extends Component {
  state = {
    values: []
  };

  handleChange = (event, index, values) => this.setState({ values });

  menuItems(values) {
    return proteins.map(protein => (
      <MenuItem
        key={protein}
        insetChildren={true}
        checked={values && values.indexOf(protein) > -1}
        value={protein}
        primaryText={protein}
      />
    ));
  }

  render() {
    const { values } = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Please Select a Protein"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}
