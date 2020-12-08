import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
* We can "fix" the problem by calling this import here (line 7)
* But we don't need useTracker in this file
*/
// import { useTracker } from 'meteor/react-meteor-data';

import { AccountProvider } from './account-context.js';

/**
* We can also "fix" the problem by not using lazy load (line 15)
*/
// import UseTheContext from "./use-context.js";
const UseTheContext = lazy(() => import("./use-context.js"));

export const App = () => (
  <Router>
    <AccountProvider>
      <h1>Welcome to Meteor!</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route component={UseTheContext} />
        </Switch>
      </Suspense>
    </AccountProvider>
  </Router>
);
