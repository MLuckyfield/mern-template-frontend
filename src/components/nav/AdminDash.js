import React, { Component } from 'react';
import {axios} from "../../utilities/axios";
import Sidebar from './Sidebar'
import DashNav from './DashNav'
import { useEffect, useState} from 'react';

const Admin = () => {

  useEffect(() => {

      axios.get('http://localhost:5000/user/dash')
        .then((res) => {
            console.log('access granted')
          })
        .catch(error => console.log(error))
    },[])

    return (
      <div class='container'>
        <Sidebar/>
        <div id='admindash'>
            <DashNav/>

        </div>
      </div>

    )


}
export default Admin;
