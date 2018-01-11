import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import ShowsOne from './components/ShowsOne';

const App = () => (
  <div className="App">
    <NavigationBar />
    <div className="Main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shows/:id" component={ShowsOne} />
      </Switch>
    </div>
  </div>
);

export default App;
