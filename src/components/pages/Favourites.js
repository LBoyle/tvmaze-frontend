import React from 'react';
import { getFavouriteShows } from '../../actions/manageFavourites';
import ListItemShow from '../common/ListItemShow';

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.updateFavs = this.updateFavs.bind(this);
    this.state = {
      favs: {}
    };
  }
  componentDidMount() {
    if(localStorage.favouriteShows) this.updateFavs();
  }
  updateFavs() {
    this.setState({ favs: getFavouriteShows() });
  }
  render() {
    return (
      <div className="Favourites">
        <h3>Favourites</h3>
        <ul>{
          this.state.favs.data ?
            this.state.favs.data.map(show => {
              return <ListItemShow show={ show } key={ show } />;
            }) :
            <li>No Favourites</li>
        }</ul>
      </div>
    );
  }
}

export default Favourites;
