import React, { Component, Fragment } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Dialog } from '@material-ui/core';

export default class PatientSymptomsProfile extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const {handleChange, values} = this.props;

        return (
            <MuiThemeProvider>
                <Fragment>
                    <Dialog
                        open="true"
                        fullWidth="true"
                        maxWidth='sm' 
                    >
                        <TextField 
                        placeholder = "Enter symptom parameter 1"
                        label = "Symptom parameter 1"
                        onChange = {handleChange('symptomParameter1')}
                        defaultValue = {values.symptomParameter1}
                    />
                    <br />
                    <TextField 
                        placeholder =""
                        label = "Symptom parameter 2"
                        onChange= {handleChange('symptomParameter2')}
                        defaultValue = {values.symptomParameter2}
                    />
                    <br />
                    <TextField 
                        placeholder = ""
                        label = "Symptom parameter 3"
                        onChange ={handleChange('symptomParameter3')}
                        defaultValue = {values.symptomParameter3}
                    />
                    <br />
                    <Button
                        color = "secondary"
                        variant ="contained"
                        onClick ={this.back} 
                    >Back</Button>
                    <Button
                        color = "primary"
                        variant ="contained"
                        onClick ={this.continue} 
                    >Submit</Button>

                    </Dialog>
                    
                    
                </Fragment>
            </MuiThemeProvider>

        )
    }
        
}
