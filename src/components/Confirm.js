import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const theme = createTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault(); // Prevent page reload
    /* FORM PROCESSING CODE GOES HERE */
    this.props.nextStep(); // Call nextStep() from UserForm
  }

  back = e => {
    e.preventDefault(); // Prevent page reload
    this.props.prevStep(); // Call prevStep() from UserForm
  }

  render() {
    // Values Extraction
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      <ThemeProvider theme={theme}>
          <React.Fragment>
            <AppBar position="static">
              <h2>Confirm User Data</h2>
            </AppBar>
            <List style={{ margin: '0 25%'}}>
                <ListItem style={listItemStyle}>
                        <ListItemText primary="First Name" />
                        <ListItemText secondary={ firstName } />
                </ListItem>
                <ListItem style={listItemStyle}>
                        <ListItemText primary="Last Name" />
                        <ListItemText secondary={ lastName } />
                </ListItem>
                <ListItem style={listItemStyle}>
                    <ListItemText primary="Email" />
                    <ListItemText secondary={ email } />
                </ListItem>
                <ListItem style={listItemStyle}>
                    <ListItemText primary="Occupation" />
                    <ListItemText secondary={ occupation } />
                </ListItem>
                <ListItem style={listItemStyle}>
                    <ListItemText primary="City" />
                    <ListItemText secondary={ city } />
                </ListItem>
                <ListItem style={listItemStyle}>
                    <ListItemText primary="Bio" />
                    <ListItemText secondary={ bio } />
                </ListItem>
            </List>
            <br />
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
                Confirm & Continue
            </Button>
          </React.Fragment>
      </ThemeProvider>

    )
  }
}

// Define List Style Variable
const listItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


export default FormUserDetails