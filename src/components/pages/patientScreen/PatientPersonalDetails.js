import React, { Component, Fragment } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

export default class PatientPersonalDetails extends Component {

    continue = (e) => {
        
        e.preventDefault();
        this.props.nextStep();

    }

    render() {

        const {values, handleChange} = this.props;
        console.log(values)
        return (
            <MuiThemeProvider>
                <Fragment>
                    <Dialog 
                        open ="true"
                        fullWidth = "true"
                        maxWidth = "sm"
                    >
                    <TextField 
                        placeholder = "Enter your name"
                        label = "Name"
                        onChange ={handleChange('name')}
                        defaultValue = {values.name}
                        margin = "normal"
                        fullWidth = "false"
                    />
                    <br />
                    <TextField 
                        placeholder = "Enter your Mobile Number"
                        label = "Mobile Number"
                        onChange ={handleChange('mobileNumber')}
                        defaultValue = {values.mobileNumber}
                        margin = "normal"                        
                    />
                    <br />
                    <TextField 
                        placeholder = "Enter your Age"
                        label = "Age"
                        onChange ={handleChange('age')}
                        defaultValue = {values.age}
                        margin = "normal"                        
                    />
                    <br />
                    <Button 
                        color = "primary"
                        variant = "contained"
                        onClick = {this.continue}>
                    Continue</Button>        
                </Dialog>
                </Fragment>
            </MuiThemeProvider>

        )
    }
}


