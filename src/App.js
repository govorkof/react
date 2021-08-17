import './App.css';
import React, { Suspense } from 'react';
import { Route, withRouter, BrowserRouter } from 'react-router-dom'
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar'
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (<div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route exact path='/dialogs'
          render={() =>
            <Suspense fallback={<div>Загрузка...</div>}>
              <DialogsContainer />
            </Suspense>} />

        <Route path='/profile/:userId?'
          render={() =>
            <Suspense fallback={<div>Загрузка...</div>}>
              <ProfileContainer />
            </Suspense>} />

        <Route path='/users'
          render={() => <UsersContainer />} />

        <Route path='/login'
          render={() => <Login />} />

      </div>
    </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);


const GovorkovJSApp = (props) => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default GovorkovJSApp