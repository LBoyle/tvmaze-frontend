import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
        return res.data.map(item => <li key={item.id}>{item.airdate}: {item.airtime}: {item.name}</li>);
      })
      .then(items => {
        this.setState({ data: items }, () => {
          ReactDOM.render(this.state.data, document.getElementById('res-list'));
        });
      })
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  drawSchedule() {

  }
  render() {
    return (
      <div className="Home">
        <h3>Homepage</h3>
        <ul id="res-list"></ul>
      </div>
    );
  }
}

export default Home;
