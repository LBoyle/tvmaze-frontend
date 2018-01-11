import React from 'react';
import axios from 'axios';
import getSchedule from '../actions/getSchedule';

import ListItem from './common/ListItem';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.searchCustomDate = this.searchCustomDate.bind(this);
    this.openFilters = this.openFilters.bind(this);
    this.getSchedule = getSchedule.bind(this);
    this.state = {
      date: this.makeDate(),
      data: [],
      errors: {},
      filterName: ''
    };
  }
  makeDate() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1 > 9 ? d.getMonth()+1 : '0'+(d.getMonth()+1).toString()}-${d.getDate()}`;
  }
  componentDidMount() {
    this.updateSchedule();
  }
  searchCustomDate(e) {
    e.preventDefault();
    this.updateSchedule();
  }
  updateSchedule() {
    // will need to validate the date here before sending a request
    this.getSchedule(this.state.date, data => {
      data.error ?
        console.log("Date not recognised") :
        this.setState({ data: data.map(item => <ListItem item={ item } key={ item.id } />) });
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  openFilters() {
    console.log('not done yet');
  }
  render() {
    let filteredResults = this.state.data.filter(item => {
        return item.props.item.show.name.toLowerCase().indexOf(this.state.filterName.toLowerCase()) !== -1;
      });
    return (
      <div className="Home">
        <h3>Schedule</h3>
        <form className="row" onSubmit={ this.searchCustomDate }>
          <div className="u-full-width">
            <input className="four columns" name="date" type="text" placeholder="yyyy-mm-dd" value={ this.state.date } onChange={ this.onChange } style={{marginRight: '1em'}} />
          </div>
          <div>
            <input className="two columns" type="submit" value="Search" style={{marginRight: '1em'}} />
          </div>
          <div>
            <button className="two columns" onClick={ this.openFilters }>Filters</button>
          </div>
        </form>
        <div className="row" id="filters-box">
          <input className="four columns" id="filterName" name="filterName" type="text" placeholder="Name of show" value={ this.state.filterName } onChange={ this.onChange } />
        </div>
        <div className="row" id="res-list">{ filteredResults }</div>
      </div>
    );
  }
}

export default Home;
