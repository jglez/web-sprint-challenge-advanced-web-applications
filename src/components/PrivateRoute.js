import React from 'react'
import { Redirect, Route } from 'react-router-dom'
//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in ✅

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          // route to login
          return <Redirect to='/' />
        }
      }} />
  )
}

export default PrivateRoute