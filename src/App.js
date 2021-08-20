//import logo from './logo.svg'
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
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
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import {initializeApp} from "./redux/app-reducer";
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
        <div className="wrapper">
            <HeaderContainer />  
            <div className="wrapper-main">  
                {/* <Navbar state={props.state.sidebar}/> */}
                <Navbar />
                <div className="app-wrapper-content">
                  <Route path='/dialogs' 
                  render={ () => <DialogsContainer /> } />
                  <Route path='/profile/:userId?' 
                  render={ () => <ProfileContainer /> } />
                  <Route path='/users' 
                  render={ () => <UsersContainer />} />
                  <Route path='/login' 
                  render={ () => <LoginPage />} />
                </div>
            </div> 
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
