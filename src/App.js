import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';
import Home from './components/pages/Home';
import ShowsOne from './components/pages/ShowsOne';
import Favourites from './components/pages/Favourites';

const App = () => (
  <div className="App">
    <NavigationBar />
    <div className="Main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shows/:id" component={ShowsOne} />
        <Route exact path="/favourites" component={Favourites} />
      </Switch>
    </div>
  </div>
);

export default App;
