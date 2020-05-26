import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Artistdetails from './ArtistDetails';
import Formcomponent from './Formcomponent';

const Router = () =>{
    return(
        <Fragment>
            <BrowserRouter>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/artist/:id" component={Artistdetails}/>
            <Route exact path = "/form" component={Formcomponent}/>
            </BrowserRouter>
        </Fragment>
 
    )

}


export default Router;

