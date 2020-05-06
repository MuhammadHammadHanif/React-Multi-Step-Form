import React, { Component, Fragment } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Enter Personal Details' />
          <TextField
            hintStyle='Enter Your Occupation'
            floatingLabelText='Occupation'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintStyle='Enter Your City'
            floatingLabelText='City'
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintStyle='Enter Your Bio'
            floatingLabelText='Bio'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label='Prev'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label='Next'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
