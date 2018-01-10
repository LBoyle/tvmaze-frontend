import React from 'react';
import axios from 'axios';

class ShowsOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUrl: props.location.pathname,
      show: {},
      cast: {}
    };
  }
  componentWillMount() {
    this.getShow();
  }
  getShow() {
    axios.get(`http://api.tvmaze.com${this.state.showUrl}`)
      .then(res => this.setState({ show: res.data }, () => console.log(this.state)))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  getCast() {
    http://api.tvmaze.com/shows/1/crew
    axios.get(`http://api.tvmaze.com${this.state.showUrl}`)
      .then(res => this.setState({ cast: res.data }, () => console.log(this.state)))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  render() {
    const showDays = this.state.data.schedule ?
      this.state.data.schedule.days.map(day => <li key={ day }>{ day }</li>) :
      null;
    return (
      <div className="container">

        <div className="row">
          <div className="three columns">{
            this.state.show.image ?
              <img src={this.state.show.image.medium} alt={this.state.show.name}></img> :
              <p>No image provided</p>
          }</div>
          <div className="nine columns">
            <h3>{ this.state.show.name }</h3>
            <div dangerouslySetInnerHTML={{ __html: this.state.show.summary }}></div>
          </div>
        </div>

        <div className="row">
<<<<<<< HEAD
          <div className="three columns">{
            this.state.show.image ?
              <img src={this.state.show.image.medium} alt={this.state.show.name}></img> :
              <p>No image provided</p>
          }</div>
          <div className="nine columns">
            <h3>{ this.state.show.name }</h3>
            <div dangerouslySetInnerHTML={{ __html: this.state.show.summary }}></div>
=======
          <div className="three columns">
            {
              this.state.data.network ?
                <p>{ this.state.data.network.name } : { this.state.data.network.country.timezone }</p> :
                null
            }
            <p>Shows at { this.state.data.schedule ? this.state.data.schedule.time : null } on:</p>
            <ul>{ showDays }</ul>
          </div>
          <div className="nine columns">

>>>>>>> f7e1535e55ac7c3dff21ad3a00cc2eba1fa589e9
          </div>
        </div>

      </div>
    );
  }
}

export default ShowsOne;
