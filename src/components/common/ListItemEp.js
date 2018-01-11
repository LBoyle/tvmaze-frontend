import React from 'react';
import getEpisode from '../../actions/getEpisode';
import { Link } from 'react-router-dom';

import { addToFavouriteEpisodes } from '../../actions/manageFavouriteEps';

class ListItemEp extends React.Component {
  constructor(props){
    super(props);

    // external
    this.getEpisode = getEpisode.bind(this);
    // internal
    this.clickHandler = this.clickHandler.bind(this);
    this.addFavEpisode = this.addFavEpisode.bind(this);
    // this.deleteFavEpisode = this.deleteFavEpisode.bind(this);
    this.state = {
      isOpen: false,
      episode: props.episode
    };
  }
  componentWillMount() {
    if(this.props.parent === 'favs') this.updateEpisode();
  }
  updateEpisode() {
    this.getEpisode(this.state.episode, res => {
      res.error ?
        console.log("Show url not recognised") :
        this.setState({ episode: res });
    });
  }
  clickHandler(e) {
    const target = e.target.nextSibling;
    this.setState({ isOpen: !this.state.isOpen }, () => {
      target.style.display = this.state.isOpen ? 'block' : 'none';
    });
  }
  addFavEpisode() {
    addToFavouriteEpisodes(this.state.episode.id);
  }
  render() {
    return (
      <div className="listItem container">
        { this.state.episode.airdate }&nbsp;:&nbsp;
        { this.state.episode.airtime }&nbsp;:&nbsp;
        { this.state.episode.show ? this.state.episode.show.name : this.state.episode.name}&nbsp;
        {
          this.state.episode.show ?
            <button onClick={ this.clickHandler }>{ this.state.isOpen ? 'Hide' : 'Show' }</button> :
            <button onClick={ this.props.delHandler }>Remove</button>
        }

        <div className="row" style={{display: 'none'}}>

          <div className="three columns">{
            this.state.episode.show ?
              <img src={ this.state.episode.show.image.medium } alt={ this.state.episode.name }></img> :
              <p>No image provided</p>
          }</div>

          <div className="nine columns">
            <button value={this.state.episode.id} onClick={ this.addFavEpisode }>Favourite</button><br />
            {
              this.state.episode.show ?
                <Link to={`/shows/${this.state.episode.show.id}`}>
                  { this.state.episode.show.name }
                </Link> :
                null
            }
          </div>

        </div>

        <hr />
      </div>
    );
  }
}

export default ListItemEp;

// <div className="three columns">{
//   this.state.episode.show.image ?
//     <img src={ this.state.episode.show.image.medium } alt={ this.state.episode.name }></img> :
//     <p>No image provided</p>
// }</div>
