import React from 'react';
import Header from './Header';

import Products from './Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <Router>
       <div className="app">
         <Switch>
           <Route path="/checkout">
             <h1>checkout</h1>
           </Route>
           <Route path="/login">
             <h1>login</h1>
           </Route>
           <Route path="/">
           <Header/>
           <p>
             &copy;{new Date().getFullYear()} JAYS TRENDY COLLECTION
           </p>
           <div className="app__page">
              {/* <Sidebar/> */}
              <Products/>
            </div>
           </Route>
         </Switch>
    </div>
    </Router>
   
  );
}

export default App;
