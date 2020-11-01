import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import {BusinessReport, CreateBusiness, Events, EventDetails, BusinessLocation} from './pages/index'



const AppRoute =()=>{
    return(
        <Router>
            <Switch>
            <Route path="/" component={BusinessReport} exact/>
                <Route path="/business/report" component={BusinessReport} exact/>
                <Route path="/business/create" component={CreateBusiness} exact/>
                <Route path="/events" component={Events} exact/>
                <Route path="/event/details" component={EventDetails} exact/>
                <Route path="/business/locations" component={BusinessLocation} exact/>
            </Switch>
        </Router>
    )
}


export default AppRoute