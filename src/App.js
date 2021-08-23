import Login from "./Pages/Login/Login"
import Registration from "./Pages/Registration/Registration"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import  Dashboard   from "./Pages/Dashboard/Dashboard"
import Colorpicker from "./Core/Colorpicker/Colorpicker";

import React from 'react';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        let result = localStorage.getItem("isLoggedIn")
        console.log("res",result);
        if(result){
          console.log("success");
          return <Component {...routeProps} />
          
        }
        else{
          console.log("failure");
          return <Redirect to ="/login" />
        }
      }} 
  
        
    />
  );
};

function App() {
  return (
     <Router>
       <Route exact path="/" component={Registration}/>
       <Route exact path="/login" component={Login}/>
       <PrivateRoute  path="/dashboard" component={Dashboard}/>

     </Router>
          
  );
}

export default App;
