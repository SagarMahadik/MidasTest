import React, { Component, Fragment } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Dialog } from '@material-ui/core';


export default class PatientPainProfile extends Component {

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
        console.log(values)
        return (
            <MuiThemeProvider>
                <Fragment>

                    <Dialog 
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'

                    >
                    <TextField 
                        placeholder = "Enter pain parameter 1"
                        label = "Pain parameter 1"
                        onChange = {handleChange('painParameter1')}
                        defaultValue = {values.painParameter1}
                    />
                    <br />
                    <TextField 
                        placeholder =""
                        label = "Pain parameter 2"
                        onChange= {handleChange('painParameter2')}
                        defaultValue = {values.painParameter2}
                    />
                    <br />
                    <TextField 
                        placeholder = ""
                        label = "Pain parameter 3"
                        onChange ={handleChange('painParameter3')}
                        defaultValue = {values.painParameter3}
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
                    >Continue</Button>

                    </Dialog>                   
                    
                </Fragment>
            </MuiThemeProvider>

        )
    }
}
