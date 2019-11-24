import React, { Component } from 'react';
import DisplaySuggestions from '../DisplaySuggestions';
import '../styles/index.css';


import {Redirect} from 'react-router-dom';


export default class SearchPage extends Component {

    state ={
        userInput:"",
        patients:[],
        patientSearchResult:[],
        redirect:false,
        displaySuggestions:false
    }

    async fetchData (){
        const patients = await fetch('/resources/patient.json').catch(
            err =>console.log(err)
        )
        this.setState({patients:(await patients.json()).patients});
    }

    componentDidMount(){
        console.log("I am in component")
        this.fetchData();
    }

    onChange = (e) => {

        const searchTerm = e.target.value;
        this.setState({userInput: e.target.value })
        this.searchPatients(searchTerm);
    }

    onSubmit = (selectedText) =>{
       this.setState({
           userInput: selectedText
       }) 
    }

    searchPatients = (searchTerm) => {

        const {patients} = this.state;

        const pattern = `[A-Za-z.\s]*${searchTerm}[A-Za-z.\s]*`;

        const matchRegex = new RegExp(pattern);

        const patientSearchResultFiltered = patients.filter(item => 
            matchRegex.test(item.name||item.phone)
        );

        const patientSearchResult = patientSearchResultFiltered.slice(0,4)

        this.setState({patientSearchResult})
    }

  
    /*onSubmit = (e) => {
        
        e.preventDefault();
        this.setState({
            redirect : true
        })
        }*/       

    onInput = (e) => {
        if(e.target.value !== "") this.showSuggestions();
        else this.hideSuggestions();
    }

    showSuggestions = () => {
        this.setState({
            displaySuggestions: true
        })
    }

    hideSuggestions = () => {
        this.setState({
            displaySuggestions :false
        })
    }

    setSearchText =  (text) => {
        console.log(text)

        this.setState({
            userInput :  text,
            displaySuggestions:false
        })
    }



    render() {
        const {displaySuggestions , patientSearchResult} = this.state;     

        /*if(this.state.redirect === true){
            return <Redirect to='/doctorDashboard' />
        }*/
        return (
            <div className = "searchbox">
                
                    <input className ="doctor-searchBox-input"
                     type ="search"
                     placeholder="search for patient"
                     name ="text"
                     value ={this.state.userInput}
                     onInput ={this.onInput}
                     onChange ={this.onChange} />       
            <DisplaySuggestions 
                    displaySuggestions={displaySuggestions}
                    patientSearchResult={patientSearchResult}
                    setSearchText ={this.setSearchText}
                    
            /> 
                </div>

        )
    }
}
