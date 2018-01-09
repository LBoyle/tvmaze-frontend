import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="Main">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
