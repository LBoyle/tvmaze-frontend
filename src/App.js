import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import ShowsOne from './components/ShowsOne';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/show">
              <ShowsOne showurl={this.props} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
