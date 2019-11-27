import React, { Component } from 'react';
import DisplaySuggestions from '../DisplaySuggestions';
import '../styles/index.css';
import {Link} from 'react-router-dom';


import {Redirect} from 'react-router-dom';


export default class SearchPage extends Component {

    state ={
        userInput:"",
        currentSuggestion:0,
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
        //this.setState({activeSuggestion :0})
        this.setState({userInput: e.target.value })
        this.searchPatients(searchTerm);
    }

    onKeyDown = (e) => {        

        const {currentSuggestion, patientSearchResult} = this.state;

        console.log(currentSuggestion)
        
        if(e.keyCode === 40 && currentSuggestion< patientSearchResult.length){
            
            if(currentSuggestion===0|| currentSuggestion===patientSearchResult.length){
                this.setState({
                    userInput:patientSearchResult[0].name
                    
                })
            }
            this.setState(prevState =>({
                userInput: patientSearchResult[currentSuggestion].name, 
                currentSuggestion : prevState.currentSuggestion +1,
                   
            }))
    }else if(e.keyCode === 38 && currentSuggestion >0){
        this.setState(prevState => ({
            userInput: patientSearchResult[currentSuggestion-1].name,
            currentSuggestion:prevState.currentSuggestion -1,
            
        }))
    }else if(e.keyCode=== 13){
        this.setState({
            //currentSuggestion:0,
            displaySuggestions:false,
            userInput: patientSearchResult[currentSuggestion-1].name,
            redirect:true
        })
    }else if(e.keyCode === 8){
        this.setState(prevState =>({
            currentSuggestion:0
        }))
    }

    console.log(patientSearchResult)    //console.log(patientSearchResult[0])
    //console.log(currentSuggestion)
}

    onSubmit = (e) =>{
        e.preventDefault();
       this.setState({
           redirect:true,
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

        this.setState({patientSearchResult : patientSearchResult})
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

    onClick = (e) => {
        this.setState({
            //currentSuggestion :0,
            patientSearchResult:[],
            displaySuggestions:false,
            userInput: e.currentTarget.innerText,
            redirect:true
        })

        
    }

    setSearchText =  (text) => {
        console.log(text)
        this.setState({
            userInput :  text,
            //displaySuggestions:false
        })
    }

    render() {
        const {redirect, displaySuggestions , patientSearchResult, currentSuggestion} = this.state;     


        if(redirect){
            return <Redirect to ={`/dashboard/${this.state.userInput}`} />
        }           
        
        let suggestionListComponent;
        if(displaySuggestions && this.state.userInput){
            if(patientSearchResult.length){
                suggestionListComponent = (
                    <ul className ="suggestions">
                        {
                            patientSearchResult.map((item, index)=> (
                                                                
                                    <Link key ={index}
                                    to={`/doctorDashboard/${item.email}`}
                                     onClick={this.onClick}
                                     //className = {currentSuggestion ===index ? 'active': null}
                                     >
                                        {item.name}
                                    </Link>
                                
                            ))
                        }
                    </ul>
                )
            }
        }else{
            suggestionListComponent = (
                <div className ='no-suggestions'>
                    <em>No suggestions</em>
                </div>
            )
        }

        return (
            <form className = "searchbox" onSubmit={this.onSubmit}>
                
                    <input className ="doctor-searchBox-input"
                     type ="search"
                     placeholder="search for patient"
                     name ="text"
                     value ={this.state.userInput}
                     onInput ={this.onInput}
                     onKeyDown ={this.onKeyDown}
                     onChange ={this.onChange} /> 
                     {suggestionListComponent}
                  <input type = "submit"
                  value="Login"
                  className ="search-btn" />
                          
                </form>

        )
    }
}
