import './App.css';
import React from 'react';
import {
  Redirect,
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

import  Banner  from "./components/Banner/index";
import  Header  from "./components/Header/index";
import AddPhoto from './page/AddPhoto/AddPhoto';
import Home from './page/Home/Home';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <Header></Header>
      <Banner></Banner>

      <Switch>
          <Redirect exact from="/" to="/photos" />
          <Route path="/photos" exact>
            <Home />
          </Route>
          <Route path="/photos/add" >
            <AddPhoto history={history}/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
