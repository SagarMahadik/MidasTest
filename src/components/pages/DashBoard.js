import React, { Component } from 'react';
import '../styles/DashBoard.css'

export default class DashBoard extends Component {

    state = {
        text :''
    }

    onChange = (e) => {
        this.setState({text:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
 
    }


    render() {
        return (
            <form className="search-box-1" onSubmit={this.onSubmit}>
            <input className ="search-txt"
             type ="text"
             placeholder="This is doctor's dashboard search box"
             name ="text"
             value ={this.state.text}
             onChange ={this.onChange} />
             
             <input type = "submit"
              value="search"
              className ="search-btn" />               
        </form>
        )
    }
}
