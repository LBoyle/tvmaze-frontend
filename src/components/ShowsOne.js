import React from 'react';
import axios from 'axios';

class ShowsOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showId: props.location.pathname.split('/')[2],
      data: {}
    };
  }
  componentWillMount() {
    this.getShow();
  }
  getShow() {
    axios.get(`http://api.tvmaze.com/shows/${this.state.showId}`)
      .then(res => this.setState({ data: res }, () => console.log(this.state)))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  render() {
    return (
      <div>
        <h3>Single Show</h3>
      </div>
    );
  }
}

export default ShowsOne;

// <div dangerouslySetInnerHTML={{ __html: this.state.item.show.summary }}></div>
