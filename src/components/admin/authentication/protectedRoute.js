import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
//   console.log("this", isAuthenticated);

  return (
    <Route {...props} render = {(props) => isAuthenticated ? <Component {...props} /> : <Redirect to = '/signin' />} />
  )
}

export default ProtectedRoute;