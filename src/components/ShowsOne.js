import React from 'react';
import axios from 'axios';

class ShowsOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUrl: props.location.pathname,
      data: {}
    };
  }
  componentWillMount() {
    this.getShow();
  }
  getShow() {
    axios.get(`http://api.tvmaze.com${this.state.showUrl}`)
      .then(res => this.setState({ data: res.data }, () => console.log(this.state)))
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
            this.state.data.image ?
              <img src={this.state.data.image.medium} alt={this.state.data.name}></img> :
              <p>No image provided</p>
          }</div>
          <div className="nine columns">
            <h3>{ this.state.data.name }</h3>
            <div dangerouslySetInnerHTML={{ __html: this.state.data.summary }}></div>
          </div>
        </div>

        <div className="row">
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

          </div>
        </div>

      </div>
    );
  }
}

export default ShowsOne;
