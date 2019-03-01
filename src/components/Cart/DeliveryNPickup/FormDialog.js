import React from 'react';
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

class FormDialog extends React.Component {
  state = {
    name: '',
    streetNumberNName: '',
    aptOrSuite: 0,
    city: 'Dallas',
    stateCity: 'TX',
    zip: 0,
    open: false
  };

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
          Click here to fill out your info:
        </Button>
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
              type="full name"
              fullWidth
              className={classes.textField}
            />
            {/* Street # */}
            <TextField
              autoFocus
              margin="dense"
              id="Street Number"
              label="Street Number and Name"
              type="address name"
              fullWidth
              className={classes.textField}
            />
            {/* Appartment/suite */}
            <TextField
              autoFocus
              margin="dense"
              id="Apt or Suite #"
              label="Apt or Suite #"
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
              type="address name"
              fullWidth
              className={classes.textField}
            />
            {/* State */}
            <TextField
              autoFocus
              margin="dense"
              id="State"
              label="State"
              type="address name"
              fullWidth
              className={classes.textField}
            />

            {/*Zip Code*/}
            <TextField
              autoFocus
              margin="dense"
              id="Zip Code"
              label="Zip"
              type="address"
              fullWidth
              className={classes.textField}
              s
            />
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
