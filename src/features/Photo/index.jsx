import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch 
  } from "react-router-dom";
import Main from './pages/Main';
import AddEdit from './pages/AddEdit';

Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch();
    console.log(match)
    return (
        <Switch>
            <Route exact path={match.url}><Main></Main> </Route>

            <Route exact path={`${match.url}/add`} ><AddEdit></AddEdit> </Route>
            <Route exact path={`${match.url}/:photoId`} ><AddEdit></AddEdit> </Route>

        </Switch>
    );
}

export default Photo;