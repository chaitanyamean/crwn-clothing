import React from 'react';
import './App.css';

import { Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {

  return (

    <div>
      <h1>
        This is hats page
    </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Redirect from='*' to='/' />
    </div>
  );
}

export default App;
