import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault(); // Prevent page reload
    this.props.nextStep(); // Call nextStep() from UserForm
  }

  back = e => {
    e.preventDefault(); // Prevent page reload
    this.props.prevStep(); // Call prevStep() from UserForm
  }

  render() {
    // Property Extraction from the props
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
          <React.Fragment>
            <AppBar position="static">
              <h2>Enter Personal Details</h2>
            </AppBar>
            <br />
            <TextField
              label="Occupation" 
              placeholder="Enter Your Occupation" 
              onChange={handleChange('occupation')} // Handle field change event
              value={values.occupation} // Get default value
              variant="outlined" // Choose variant: 'outlined', 'filled', or 'standard'
              fullWidth // Makes the input take up the full width of the container
            />
            <br /> <br />
            <TextField
              label="City" 
              placeholder="Enter Your City" 
              onChange={handleChange('city')} 
              value={values.city} 
              variant="outlined" 
              fullWidth 
            />
            <br /> <br />
            <TextField
              label="Bio" 
              placeholder="Enter Your Bio" 
              onChange={handleChange('bio')} 
              value={values.bio} 
              variant="outlined" 
              fullWidth 
            />
            <br /> <br />
            <Button
              variant="contained"
              color="false" // White color
              onClick={this.back} // Run back() on click event
              style={{ width: '40%' }} // Set style
              > 
                Back
            </Button>
            <Button
              variant="contained"
              color="primary" // Blue color
              onClick={this.continue} // Run continue() on click event
              style={{ width: '40%' }} 
              > 
                Continue
            </Button>
          </React.Fragment>
      </ThemeProvider>
    )
  }
}


export default FormPersonalDetails