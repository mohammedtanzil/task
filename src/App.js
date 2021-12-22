import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,useHistory, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login';
import amdin from './components/admin';
import adminlogin from './components/adminlogin';
import errorpage from './components/errorpage';
import Addpost from './components/addpost';
import React, { useState,useDebugValue } from 'react';
import {Provider} from 'react-redux'
import store from './storte';
import Action from './storte/action'
function App() {



const Logout=()=>{

  
  localStorage.clear();
  const location =useLocation();
const history =useHistory();

history.replace("/");
return null

}

 
  return (
    
      
    <div className="App">
      <Provider store={store}>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
            
          <Route exact path="/admintanziladmin094" component={adminlogin} />
          <Route exact path="/logout" component={Logout} />
          {
             localStorage.getItem('user')?
             <>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/postadd" component={Addpost} />
                
              </>
              :
            <>
              <Route exact path="/login" component={Login} />
              </>
          
          }
         
          
          <Route component={errorpage} />
          
        </Switch>
        <Footer/>
      </Router>
      {localStorage.getItem('user')?
             <Action />:null }
      </Provider>
      
    </div>
   
    
  );
}

export default App;
