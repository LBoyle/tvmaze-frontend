import React from 'react';
import getShow from '../../actions/getShow';
import getCastByShow from '../../actions/getCastByShow';

import { addToFavouriteShows } from '../../actions/manageFavouriteShows';

class ShowsOne extends React.Component {
  constructor(props) {
    super(props);
    // external
    this.getShow = getShow.bind(this);
    this.getCastByShow = getCastByShow.bind(this);
    // internal
    this.uppdateCast = this.updateCast.bind(this);
    this.uppdateShow = this.updateShow.bind(this);
    this.addFavouriteShow = this.addFavouriteShow.bind(this);
    this.state = {
      showUrl: props.location.pathname,
      show: {},
      cast: {}
    };
  }
  componentWillMount() {
    this.updateShow();
    this.updateCast();
  }
  updateShow() {
    this.getShow(this.state.showUrl.split('/')[2], res => {
      res.error ?
        console.log("Show url not recognised") :
        this.setState({ show: res });
    });
  }
  updateCast() {
      this.getCastByShow(this.state.showUrl.split('/')[2], res => {
          res.error ?
          console.log("Show url not recognised") :
          this.setState({ cast: res });
      });
  }
  addFavouriteShow() {
    addToFavouriteShows(this.state.showUrl.split('/')[2]);
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

        <div className="row">
          <button onClick={ this.addFavouriteShow }>Favourite Show</button>
        </div>

      </div>
    );
  }
}

export default ShowsOne;
