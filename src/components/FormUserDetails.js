import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const theme = createTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
          <React.Fragment>
            <AppBar position="static">
              <h2>Enter User Details</h2>
            </AppBar>
          </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default FormUserDetails