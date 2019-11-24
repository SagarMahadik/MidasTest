import React, { Component } from 'react'
import PatientPersonalDetails from './PatientPersonalDetails';
import PatientPainProfile from './PatientPainProfile';
import PatientSymptomsProfile from './PatientSymptomsProfile';
import PatientGetWellSoon from './PatientGetWellSoon';

export default class PatientForm extends Component {
    state = {

        step: 1,
        name: '',
        mobileNumber: '',
        age: '',
        painParameter1: '',
        painParameter2: '',
        painParameter3: '',
        symptomParameter1: '',
        symptomParameter2: '',
        symptomParameter3: '',
        };
    
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    previousStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        console.log("I am in handlechange")
        this.setState({
            [input] : e.target.value
        })
    }

        render() {

            const {step} = this.state;
            const { name, 
                mobileNumber, 
                age, 
                painParameter1, 
                painParameter2, 
                painParameter3, 
                symptomParameter1, 
                symptomParameter2, 
                symptomParameter3 
                } = this.state;
            const values = { name, 
                mobileNumber, 
                age, 
                painParameter1, 
                painParameter2, 
                painParameter3, 
                symptomParameter1, 
                symptomParameter2, 
                symptomParameter3 

            }
        
        switch(step){
            case 1:
                return(
                    <PatientPersonalDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values} />
                );
            case 2:
                return(
                    <PatientPainProfile
                        nextStep = {this.nextStep}
                        previousStep= {this.previousStep}
                        handleChange = {this.handleChange}
                        values = {values}  />
                );
            case 3:
                return(
                    <PatientSymptomsProfile 
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                        handleChange = {this.handleChange}
                        values = {values}/>
                )
            case 4:
                return(
                    <PatientGetWellSoon />
                )        
        }

    }
}
