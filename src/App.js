import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from './components/common/preloader/Preloader';
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import store from "./redux/redux-store";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
          </BrowserRouter>
}

export default SamuraiJSApp;