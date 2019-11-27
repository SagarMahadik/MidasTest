import React, { Component,Fragment } from 'react'
import "./styles/index.css"

export default class DisplaySuggestions extends Component {

    state ={
        selectedText :''
    }


    onClick = (e) => {
        e.preventDefault();
        const selectedText = e.currentTarget.innerText ;
        this.setState({selectedText : selectedText},
            this.props.setSearchText(selectedText)
            );                     
       }



    render() {
        
        const{displaySuggestions, patientSearchResult, currentSuggestion} = this.props;
                  
        if (!displaySuggestions) return null;

        return (
           
            
            <Fragment>

                <ul className="suggestions">
                    {
                        patientSearchResult && 
                        patientSearchResult.map((item,index)=>{
                         
                            return(
                                
                                <li key={index}
                                className={ currentSuggestion === index? 'active' :null}  
                                onClick={this.onClick}
                                >
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
