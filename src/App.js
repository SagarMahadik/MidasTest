import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/pages/loginScreen/Login';
import PatientForm from './components/pages/patientScreen/PatientForm'
import SearchPage from './components/pages/SearchPage';
import DashBoard from './components/pages/DashBoard';
import './App.css'


class App extends React.Component {
  
  render(){
    return (
      <Router>
        <Route exact path ="/" component = { Login}/>
        <Route exact path = "/patientForm" component ={PatientForm} />
        <Route exact path ="/doctorSearch" component = {SearchPage} />
        <Route path ="/doctorDashboard/:id" component = { DashBoard}/>
      </Router>
  
    );
  }

}

export default App;
