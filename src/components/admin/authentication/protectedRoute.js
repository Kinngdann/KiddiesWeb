import React from "react";
import { Redirect, Route } from "react-router-dom";
// import AddVotes from "../addVotes";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
//   const others = <Route exact path = '/admin/:addvotes' component = {AddVotes} />

//   const routes = (
//       <Route exact path = '/admin/:addvotes' component = {AddVotes} />
//   )


//   console.log("this", isAuthenticated);

  return (
    <Route {...props} 
        render = {(props) => isAuthenticated ? <Component {...props}/> : <Redirect to = '/signin'/> }
    />
  )
}

export default ProtectedRoute;