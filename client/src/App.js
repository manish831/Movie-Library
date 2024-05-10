import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListMovie from './components/ListMovie';
import ListHeading from './components/ListHeading';
import SearchBox from './components/SearchBox';

import HomePage from './components/home';
import LoginPage from './components/login';
import Signup from './components/signup';
import Details from './components/details';

import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // Link,
  } from "react-router-dom";



const App = () =>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <HomePage />
                </div>
            )
        },
        {
            path: "/login",
            element: (
                <div>
                    <LoginPage />
                </div>
            )
        },
        {
            path: "/signup",
            element: (
                <div>
                    <Signup />
                </div>
            )
        },
        {
            path: "/details/:id",
            element: (
                <div>
                    <Details />
                </div>
            )
        }
    ])
    return (
        <div className='container-fluid movie'>
             <RouterProvider router={router} />
            
        </div>
    );
};
export default App;