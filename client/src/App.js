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
    // const [movies, setMovies] = useState([]);
    // const [toSearch, setToSearch] = useState('');
    // const getMovie = async () => {
    //     const url = `https://www.omdbapi.com/?s=${toSearch}&apikey=4a3b711b`;
    //     const response = await fetch(url);
    //     const jsonResponse = await response.json();
    //     if(jsonResponse.Search){
    //         setMovies(jsonResponse.Search);
    //     }
    // };
    // useEffect(()=>{
    //     getMovie(toSearch);
    // }, [toSearch]);

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
    // return (
    //     <div className='container-fluid movie'>
    //         <div className='row d-flex align-item-center mt-4 mb-4'>
    //             <ListHeading heading = 'Movies' />
    //             <SearchBox toSearch={toSearch} setToSearch = {setToSearch} />
    //         </div>
    //         <div className='row'>
    //             <ListMovie movies = {movies} />
    //         </div>
    //     </div>
    // );

    return (
        <div className='container-fluid movie'>
             <RouterProvider router={router} />
            
        </div>
    );
};
export default App;