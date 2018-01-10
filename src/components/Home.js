import React from 'react';
import axios from 'axios';

import ListItem from './common/ListItem';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      errors: {}
    };
  }
  componentWillMount() {
    this.getTodaySchedule();
  }
  getTodaySchedule() {
    axios.get('http://api.tvmaze.com/schedule?country=US&date=2018-01-10')
      .then(res => {
        return res.data.map(item => <ListItem item={ item } key={ item.id } />);
      })
      .then(items => this.setState({ data: items }))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  render() {
    return (
      <div className="Home">
        <h3>Todays Schedule</h3>
        <ul id="res-list">{ this.state.data }</ul>
      </div>
    );
  }
}

export default Home;
