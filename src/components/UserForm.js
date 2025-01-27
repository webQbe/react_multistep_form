import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    // State Management
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    /* The component uses the state object to manage:

        step: Tracks the current step of the form 
            (e.g., 1 for the first form, 2 for the second, etc.).

        Form Fields: Stores the values for firstName, lastName, email, occupation, city, and bio. 
    */


    // Navigation Functions

    // Increments the step by 1
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1 
        }); 
    }

    // Decrements the step by 1
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1 
        }); 
    }

    // Form Input Handling
    handleChange = input => e => {

        this.setState({[input]: e.target.value}); 
         /* The handleChange function updates the state when a form field value changes. 
            It uses the input name as the key to update the corresponding field in the state. */ 
    }

  // Dynamic Rendering
  render() {
    // Property Extraction from the state:
    const { step } = this.state; 
    const { firstName, lastName, email, occupation, city, bio } = this.state;

    /* Values Extraction: 
    Before rendering, the current form field values are extracted into a values object */
    const values = { firstName, lastName, email, occupation, city, bio };
    /* This values object is passed as a prop to child components */

    /* The render method dynamically renders different components or messages based on the current step. */

    switch(step){
        case 1:
            return(
                // Render FormUserDetails component
                <FormUserDetails 
                    nextStep={this.nextStep} // The function to move to the next step
                    handleChange={this.handleChange} // Updates the form fields
                    values={values} // The current form values to pre-fill or handle form state
                />
            )
        case 2:
            return(
                // Render FormPersonalDetails component
                <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep} // The function to move to the previous step
                    handleChange={this.handleChange} 
                    values={values} 
                />
            )

        case 3:
            return(
                // Render Confirm component
                <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep} // The function to move to the previous step
                    values={values} 
                />
            )

        case 4:
            return <Success />; 
    }
  }
}

export default UserForm