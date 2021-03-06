import React from 'react';
import getSchedule from '../../actions/getSchedule';

import ListItemEp from '../common/ListItemEp';

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
      filtersOpen: false,
      filterName: '',
      filterTime: ''
    };
  }
  makeDate() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1 > 9 ? d.getMonth()+1 : '0'+(d.getMonth()+1).toString()}-${d.getDate()}`;
  }
  componentDidMount() {
    this.updateSchedule();
    this.filtersBox = document.getElementById('filters-box');
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
        this.setState({ data: data.map(item => <ListItemEp episode={ item } key={ item.id } parent="home" />) });
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  openFilters() {
    this.setState({ filtersOpen: !this.state.filtersOpen }, () => {
      this.filtersBox.classList.toggle('hide');
    });
  }
  render() {
    let filteredResults =
      this.state.data.filter(item => {
        return item.props.episode.show.name.toLowerCase()
          .indexOf(this.state.filterName.toLowerCase()) !== -1;
      }).filter(item => {
        return item.props.episode.airtime
          .indexOf(this.state.filterTime) !== -1;
      });

    return (
      <div className="Home">
        <h3>Schedule</h3>
        <form className="row" onSubmit={ this.searchCustomDate }>
          <input
            className="searchInput columns"
            name="date"
            id="date-field"
            type="text"
            placeholder="ISO Date yyyy-mm-dd"
            value={ this.state.date }
            onChange={ this.onChange } />
          <input
            className="searchBtn columns"
            type="submit"
            value="Search" />
          <button
            className="filterBtn columns"
            onClick={ this.openFilters }>
              Filters
          </button>
        </form>
        <div className="row hide" id="filters-box">
          <input
            className="searchInput columns"
            id="filter-name"
            name="filterName"
            type="text"
            placeholder="Name of show"
            value={ this.state.filterName }
            onChange={ this.onChange } />

          <input
            className="searchInput columns"
            id="filter-time"
            name="filterTime"
            type="text"
            placeholder="Airtime hh:mm"
            value={ this.state.filterTime }
            onChange={ this.onChange } />
        </div>
        <div id="res-list">{ filteredResults }</div>
      </div>
    );
  }
}

export default Home;
