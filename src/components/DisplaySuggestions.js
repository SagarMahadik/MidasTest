import React, { Component,Fragment } from 'react'
import "./styles/index.css"

export default class DisplaySuggestions extends Component {

    state ={
        selectedText :''
    }

    onClick = (e) => {
        const selectedText = e.currentTarget.innerText ;
        this.setState({selectedText});
        //console.log(this.state.selectedText);
        this.props.setSearchText(selectedText);      
    }

    render() {
        
        const{displaySuggestions, patientSearchResult} = this.props;
        if (!displaySuggestions) return null;

        return (
            <Fragment>

                <ul className="suggestions">
                    {
                        patientSearchResult && 
                        patientSearchResult.map((item,index)=>{
                            return(
                                <li key={index} onClick={this.onClick} >
                                    <a>
                                    {item.name}
                                    </a>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
                
        )
    }
}
