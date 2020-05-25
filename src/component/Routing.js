import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom';

import post from './post';
import profile from './profile';
import postdetails from './postDetails';
import profiledetails from './profileDetails';

const Routing = () => {
    return(
        <BrowserRouter>
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Linking forms</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                      
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                       
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        <Route exact path="/post" component={post}/>
        <Route exact path="/post/:topic" component={postdetails}/>
        <Route exact path="/profile/:para" component={profiledetails}/>
        <Route exact path="/profile" component={profile}/>
       
        
    </BrowserRouter>
    )
}

export default Routing;
   