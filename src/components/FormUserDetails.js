import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const theme = createTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault(); // Prevent page reload
    this.props.nextStep(); // Call nextStep() from UserForm
  }

  render() {
    // Property Extraction from the props
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
          <React.Fragment>
            <AppBar position="static">
              <h2>Enter User Details</h2>
            </AppBar>
            <br />
            <TextField
              label="First Name" 
              placeholder="Enter Your First Name" 
              onChange={handleChange('firstName')} // Handle field change event
              value={values.firstName} // Get default value
              variant="outlined" // Choose variant: 'outlined', 'filled', or 'standard'
              fullWidth // Makes the input take up the full width of the container
            />
            <br /> <br />
            <TextField
              label="Last Name" 
              placeholder="Enter Your Last Name" 
              onChange={handleChange('lastName')} 
              value={values.lastName} 
              variant="outlined" 
              fullWidth 
            />
            <br /> <br />
            <TextField
              label="Email" 
              placeholder="Enter Your Email" 
              onChange={handleChange('email')} 
              value={values.email} 
              variant="outlined" 
              fullWidth 
            />
            <br /> <br />
            <Button
              variant="contained"
              color="primary" // Blue color
              onClick={this.continue} // Run continue() on click event
              style={{ width: '95%' }} // Set style
              > 
                Continue
            </Button>
          </React.Fragment>
      </ThemeProvider>
    )
  }
}


export default FormUserDetails