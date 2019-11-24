import React, { Component } from 'react'
import './SearchBox.css'

export default class SeachBox extends Component {
    render() {
        return (
            <form className="search-box">
               <input className ="search-txt" type ="search" placeholder="search" />               
            </form>
        )
    }
}
