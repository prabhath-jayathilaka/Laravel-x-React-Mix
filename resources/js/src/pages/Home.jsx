import React from 'react';
import { Link } from "react-router-dom";


// 

import Navbar from '../components/Navbar';


function Home(props) {
    return (
        <div>
        <Navbar></Navbar>
        <h1>Home Component</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Home;