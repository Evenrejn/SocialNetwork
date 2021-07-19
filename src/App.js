//import logo from './logo.svg'
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {

  return (
      <div className="wrapper">
          <Header />  
          <div className="wrapper-main">  
              <Navbar state={props.state.friends}/>
              <div className="app-wrapper-content">
                <Route path='/dialogs' 
                render={ () => <Dialogs 
                state={props.state.dialogsPage} /> } />
                <Route path='/profile' 
                render={ () => <Profile 
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch}/> } />
              </div>
          </div> 
      </div>
  );
}

export default App;
