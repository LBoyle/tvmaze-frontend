import React from 'react';
import axios from 'axios';

import ListItem from './common/ListItem';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.searchCustomDate = this.searchCustomDate.bind(this);
    this.getTodaySchedule = this.getTodaySchedule.bind(this);
    this.openFilters = this.openFilters.bind(this);
    this.state = {
      date: this.makeDate(),
      data: [],
      errors: {}
    };
  }
  makeDate() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1 > 9 ? d.getMonth()+1 : '0'+(d.getMonth()+1).toString()}-${d.getDate()}`;
  }
  componentWillMount() {
    this.getTodaySchedule();
  }
  getTodaySchedule(date = this.state.date) {
    axios.get(`http://api.tvmaze.com/schedule?country=US&date=${date}`)
      .then(res => {
        return res.data.map(item => <ListItem item={ item } key={ item.id } />);
      })
      .then(items => this.setState({ data: items }))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  searchCustomDate(e) {
    e.preventDefault();
    this.getTodaySchedule();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  openFilters() {

  }
  render() {
    return (
      <div className="Home">
        <h3>Schedule</h3>
        <form className="row" onSubmit={ this.searchCustomDate }>
          <div className="u-full-width">
            <input className="four columns" name="date" type="text" placeholder="yyyy-mm-dd" value={this.state.date} onChange={this.onChange} style={{marginRight: '1em'}} />
          </div>
          <div>
            <input className="two columns" type="submit" value="Search" style={{marginRight: '1em'}} />
          </div>
          <div>
            <button className="two columns" onClick={this.openFilters}>Filters</button>
          </div>
        </form>
        <div id="filters-box"></div>
        <div id="res-list">{ this.state.data }</div>
      </div>
    );
  }
}

export default Home;
