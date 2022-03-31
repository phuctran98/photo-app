import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Header from "./components/Banner/Header";
import NotFound from "./components/NotFound";
import Photo from "./features/Photo";
import productApi from "./api/productApi";
import SignIn from "./features/Auth/pages/SignIn";
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);
function App() {
  const [productList, setProductList] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll(params);
        console.log('Fetch products successfully: ', response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();
  }, []);
  //handle firebase auth change
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      setIsSignedIn(!!user);
      //k can
      if(!user){
        return
      }
      const token = await user.getIdToken()
      console.log('Logged in toke:',token)
      console.log('Logged in user:',user.displayName)
    });
    
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos">
              <Photo />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route >
              <NotFound />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
