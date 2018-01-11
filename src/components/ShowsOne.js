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
    this.getCast();
  }
  getShow() {
    axios.get(`http://api.tvmaze.com${this.state.showUrl}`)
      .then(res => this.setState({ show: res.data }))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  getCast() {
    axios.get(`http://api.tvmaze.com${this.state.showUrl}/crew`)
      .then(res => this.setState({ cast: res.data }))
      .catch(err => {
        this.setState({ errors: err }, () => console.log(this.state));
      });
  }
  render() {
    const show = this.state.show;
    const showDays = show.schedule ?
      show.schedule.days.map(day => <li key={ day }>{ day }</li>) :
      null;
    const cast = this.state.cast.length ?
      this.state.cast.map(p => <p key={ `${p.person.id}-${p.type.split(' ')[0]}` }>{ `${p.type}: ` }<a href={ p.person.url }>{ p.person.name }</a></p>) :
      null;

    return (
      <div className="container">

        <div className="row">
          <div className="three columns">{
            show.image ?
              <img src={show.image.medium} alt={show.name}></img> :
              <p>No image provided</p>
          }</div>
          <div className="nine columns">
            <h3>{ show.name }</h3>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
          </div>
        </div>

        <div className="row">
          <div className="four columns">
            {
              show.network ?
                <p>{ show.network.name } : { show.network.country.timezone }</p> :
                null
            }
            <p>Shows at { show.schedule ? show.schedule.time : null } on:</p>
            <ul>{ showDays }</ul>
          </div>
          <div className="four columns">
            { cast }
          </div>
          <div className="four columns">
            {
              show.schedule ?
                [
                  <p key="0">Type: { show.type }</p>,
                  <p key="1">Language: { show.language }</p>,
                  <p key="2">Official site: <a href={ show.officialSite }>{ show.officialSite }</a></p>
                ] :
                null
            }
          </div>
        </div>

      </div>
    );
  }
}

export default ShowsOne;
