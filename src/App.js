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


function App(props) {
  return (
      <div className="wrapper">
          <Header />  
          <div className="wrapper-main">  
              <Navbar state={props.state.sidebar}/>
              <div className="app-wrapper-content">
                <Route path='/dialogs' 
                render={ () => <DialogsContainer 
                store={props.store}/> } />
                <Route path='/profile' 
                render={ () => <Profile 
                store={props.store}/> } />
              </div>
          </div> 
      </div>
  );
}

export default App;
