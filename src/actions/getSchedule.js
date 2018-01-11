import axios from 'axios';
// import React from 'react';

// import ListItem from '../components/common/ListItem';

export default function getSchedule(date, c) {
  return axios.get(`http://api.tvmaze.com/schedule?country=US&date=${date}`)
    .then(res => {
      return c(res.data);
      // return res.data.map(item => <ListItem item={ item } key={ item.id } />);
    })
    // .then(items => this.setState({ data: items }))
    .catch(err => {
      console.log(err);
      return c(err);
      // this.setState({ errors: err }, () => console.log(this.state));
    });

}
