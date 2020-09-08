import React from 'react';
import Navigation from "./Navigation";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Anim from "./Anim";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App =()=> {
  return (<>
   
   <Navigation/>
    <Switch>
      <Route exact path="/" component={()=>{
        return (<Home />);
      }}></Route>

<Route exact path="/service" component={()=>{
        return (<Service/>);
      }}></Route>

<Route exact path="/about" component={()=>{
        return (<About/>);
      }}></Route>

<Route exact path="/contact" component={()=>{
        return (<Contact/>);
      }}></Route>

<Route exact path="/anim" component={()=>{
        return (<Anim/>);
      }}></Route>
 
  <Redirect to="/about" />
    </Switch>
    
</>  );
}

export default App;
