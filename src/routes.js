import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';

export default function AppRoutes() {
  return (
    <Router>
      <div className="columns">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}
