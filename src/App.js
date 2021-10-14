
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router'

//import styles
import './scss/main.scss'

//import components
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from './Login'
import Signup from './Signup'
import AdminDash from './AdminDash'
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
