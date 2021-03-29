import React from 'react';
import { Link } from "react-router-dom";

 const Home = () => {
     return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link  className="navbar-brand" to="/">Home</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link  className="nav-link" to="/about">Aboutus</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/price">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/user/1">User1</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/user/3">User3</Link>
                    </li> <li className="nav-item">
                        <Link  className="nav-link" to="/user/10">User10</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
     )
 }

 export default Home;