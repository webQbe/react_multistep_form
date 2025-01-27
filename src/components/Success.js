import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';


const theme = createTheme();

export class Success extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <React.Fragment>
            <AppBar position="static">
              <h1>Success</h1>
            </AppBar>
            <h2>Thank You For Your Submission!</h2>
            <p>You will get an email with further instructions.</p>
          </React.Fragment>
      </ThemeProvider>

    )
  }
} 


export default Success