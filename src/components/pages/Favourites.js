import React from 'react';
import { getFavouriteShows, deleteFavouriteShow } from '../../actions/manageFavouriteShows';
import { getFavouriteEpisodes, deleteFavouriteEpisode } from '../../actions/manageFavouriteEps';
import ListItemShow from '../common/ListItemShow';
import ListItemEp from '../common/ListItemEp';

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.updateFavs = this.updateFavs.bind(this);
    this.epDelHandler = this.epDelHandler.bind(this);
    this.showDelHandler = this.showDelHandler.bind(this);
    this.state = {
      favShows: {},
      favEps: {}
    };
  }
  componentWillMount() {
    if(localStorage.favouriteShows || localStorage.favouriteEps) this.updateFavs();
  }
  updateFavs() {
    this.setState({ favShows: getFavouriteShows() });
    this.setState({ favEps: getFavouriteEpisodes() });
  }
  showDelHandler(e) {
    deleteFavouriteShow(e.target.value, () => this.updateFavs());
  }
  epDelHandler(e) {
    deleteFavouriteEpisode(e.target.value, () => this.updateFavs());
  }
  render() {
    const favShows = this.state.favShows.data ?
      this.state.favShows.data.map(show => {
        return <ListItemShow show={ show } key={ show } delHandler={ this.showDelHandler } />;
      }) : <li>No Favourite Shows</li>;

    const favEpisodes = this.state.favEps.data ?
      this.state.favEps.data.map(episode => {
        return <ListItemEp episode={ episode } key={ episode } delHandler={ this.epDelHandler } parent="favs" />;
      }) : <li>No Favourite Episodes</li>;

    return (
      <div className="Favourites">

        <h3>Shows</h3>
        <ul>{ favShows }</ul>

        <h3>Episodes</h3>
        <ul>{ favEpisodes }</ul>

      </div>
    );
  }
}

export default Favourites;
