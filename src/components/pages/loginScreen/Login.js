import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    state ={
        systemUser:'',
        redirect: false
    }

    onChange = (e) => {
        this.setState({systemUser:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.systemUser==="Doctor" || this.state.systemUser==="Patient"){
            this.setState({redirect : true});
        }else {
            alert("Please use valid credentials and login again")
        }       
        
    }

    render() {
        
        if(this.state.redirect=== true && this.state.systemUser==="Doctor"){
            return <Redirect to ="/doctorSearch" />
        }else if(this.state.redirect=== true && this.state.systemUser==="Patient"){
            return <Redirect to = "/patientForm" />
        }
        return (
            <div>
            <form className="search-box" onSubmit={this.onSubmit}>
                <input className ="search-txt"
                 type ="text"
                 placeholder="Enter username to login"
                 name ="text"
                 value={this.state.systemUser}
                 onChange ={this.onChange}
                 />
                 
                 <input type = "submit"
                  value="Login"
                  className ="search-btn" />               
            </form>
        </div>
        )
    }
}
