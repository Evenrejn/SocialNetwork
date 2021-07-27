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
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
      <div className="wrapper">
          <Header />  
          <div className="wrapper-main">  
              {/* <Navbar state={props.state.sidebar}/> */}
              <Navbar />
              <div className="app-wrapper-content">
                <Route path='/dialogs' 
                render={ () => <DialogsContainer /> } />
                <Route path='/profile' 
                render={ () => <ProfileContainer /> } />
                <Route path='/users' 
                render={ () => <UsersContainer />} />
              </div>
          </div> 
      </div>
  );
}

export default App;
