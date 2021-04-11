import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import Home from '../component/Home';


const ApplicationRoutes = () => {
    return (
        <Router>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/home" component={Home} />
            <Redirect to="/home" from="/" />
        </Router>
    );
}

export default ApplicationRoutes;