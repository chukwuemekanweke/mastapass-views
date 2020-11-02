import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Login from './authentication/login';
import ResetPassword from './authentication/resetPassword';
import AirTravel from './createEvents/airTravel';
import Cinema from './createEvents/cinema';
import Confrence from './createEvents/confrence';
import CreateEvents from './createEvents/events';
import WeddingEvents from './createEvents/wedding';
import DashBoard from './dashBoard/dashBoard';
import EventDetail from './eventDetails/eventDetails';
import Events from './events/events';
import Profile from './profile/profile';
import Ticket from './tickets/ticket';
import TicketDetails from './tickets/ticketDetails';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={AirTravel} exact />
                <Route path='/cinema' component={Cinema} exact />
                <Route path='/confrence' component={Confrence} exact />
                <Route path='/create-events' component={CreateEvents} exact />
                <Route path='/wedding' component={WeddingEvents} exact />
                <Route path='/dashboard' component={DashBoard} exact />
                <Route path='/event-details' component={EventDetail} exact />
                <Route path='/events' component={Events} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/profile' component={Profile} exact />
                <Route path='/resetpassword' component={ResetPassword} exact />
                <Route path='/ticketdetails' component={TicketDetails} exact />
                <Route path='/ticket' component={Ticket} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter