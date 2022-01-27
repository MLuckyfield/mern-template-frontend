
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router'

//import styles
import './scss/main.scss'

//import components
import Navbar from './components/nav/Navbar'
import Login from './components/user/Login'
import Signup from './components/user/Signup'
import AdminDash from './components/nav/AdminDash'
import AuthDataProvider from "./components/auth-provider";
import {useAuthDataContext} from "./components/auth-provider";


const App = () => {
      return (
        <Router>
            <Route path="/" component={Navbar}/>
            <Route path="/signup" component={Signup}/>
            <AuthDataProvider>
              <SentryRoute path="/login" access='user' success={AdminDash} fail={Login}/>
              <SentryRoute path="/dash" access='user' success={AdminDash} fail={Login}/>
            </AuthDataProvider>
        </Router>

      )
  }

const SentryRoute = ({ access, success, fail, ...options }) => {
  //const { user } = useAuthDataContext();
// localStorage.setItem('user',null)
  let user = localStorage.getItem('user');
  if(user == '' || null){
    return <Route {...options} component={fail} />;
  }else{
    user = JSON.parse(localStorage.getItem('user'));
    const finalComponent = (user && user.role==access? success : fail);
    return <Route {...options} component={finalComponent} />;
  }



};

export default App;
