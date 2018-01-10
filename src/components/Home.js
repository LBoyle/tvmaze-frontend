import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.updatePage = this.updatePage.bind(this);
    this.drawItems = this.drawItems.bind(this);
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
        return res.data.map(item => <li className="listItem" key={item.id}>{item.airdate}: {item.airtime}: {item.show.name}</li>);
      })
      .then(items => {
        this.setState({ data: items }, () => {
          this.drawItems();
        });
      })
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  updatePage() {
    const newData = this.state.data;
    newData.splice(0, 1);
    this.setState({ data: newData }, () => {
      this.forceUpdate(() => {
        console.log(this.state);
        this.deleteItems(this.drawItems);
      });
    });
  }
  deleteItems(c = undefined) {
    ReactDOM.unmountComponentAtNode(document.getElementById('res-list'))
    if(c) c();
  }
  drawItems() {
    ReactDOM.render(this.state.data, document.getElementById('res-list'));
  }
  render() {
    return (
      <div className="Home">
        <h3>Todays Schedule</h3>
        <button onClick={this.updatePage}>refresh</button>
        <ul id="res-list"></ul>
      </div>
    );
  }
}

export default Home;
