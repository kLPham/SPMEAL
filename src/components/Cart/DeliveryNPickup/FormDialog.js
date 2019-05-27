import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SavedAddress from './SavedAddress';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    // width: 200,
    // height: 100,
    width: 600,
    height: 400,
    fontSize: '16px'
    // borderRadius: '10px'
  }
});

class FormDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button style={{ fontSize: '20px' }} onClick={this.handleClickOpen}>
          Fill Out Your Info Here:
        </Button>
        {/* //testing this */}
        <span>{this.props.children}</span>
        {/* //testing this */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            enter delivery address
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please let us know where to deliver your gourmade meals.
            </DialogContentText>
            {/* Name */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              placeholder={this.props.name}
              type="full name"
              fullWidth
              className={classes.textField}
            >
              {this.props.name}
            </TextField>
            {/* Street # */}
            <TextField
              autoFocus
              margin="dense"
              id="Street Number"
              label="Street Number and Name"
              placeholder={this.props.streetNumberNName}
              type="address name"
              fullWidth
              className={classes.textField}
            >
              {this.props.address}
            </TextField>
            {/* Appartment/suite */}
            <TextField
              autoFocus
              margin="dense"
              id="Apt or Suite #"
              label="Apt or Suite #"
              placeholder={this.props.aptOrSuite}
              type="address name"
              fullWidth
              className={classes.textField}
            />
            {/* City */}
            <TextField
              autoFocus
              margin="dense"
              id="City"
              label="City"
              placeholder={this.props.city}
              type="address name"
              fullWidth
              className={classes.textField}
            >
              {this.props.city}{' '}
            </TextField>
            {/* State */}
            <TextField
              autoFocus
              margin="dense"
              id="State"
              label="State"
              placeholder={this.props.stateCity}
              type="address name"
              fullWidth
              className={classes.textField}
            >
              {this.props.stateCity}{' '}
            </TextField>

            {/*Zip Code*/}
            <TextField
              autoFocus
              margin="dense"
              id="Zip Code"
              label="Zip"
              placeholder={this.props.zip}
              type="address"
              fullWidth
              className={classes.textField}
              s
            >
              {this.props.zip}{' '}
            </TextField>
            {/* <TextField
              id="Name"
              label="Name"
              type="Name"
              //   className={classes.textField}
              margin="normal"
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
            <SavedAddress
              id={this.props.id}
              isSaved={this.props.isSaved}
              numSaves={this.props.numSaves}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
FormDialog.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FormDialog);
