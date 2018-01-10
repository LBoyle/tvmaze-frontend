import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ListItem from './ListItem';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.updatePage = this.updatePage.bind(this);
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
        return res.data.map(item => <ListItem item={item} key={item.id} />);
      })
      .then(items => this.setState({ data: items }))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  updatePage() {
    const newData = this.state.data;
    newData.splice(0, 1);
    this.setState({ data: newData }, () => this.forceUpdate());
  }
  render() {
    return (
      <div className="Home">
        <h3>Todays Schedule</h3>
        <button onClick={this.updatePage}>remove first item</button>
        <ul id="res-list">{this.state.data}</ul>
      </div>
    );
  }
}

export default Home;
