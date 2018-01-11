import React from 'react';
import { Link } from 'react-router-dom';

class ListItemEp extends React.Component {
  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      isOpen: false,
      episode: props.episode
    };
  }
  clickHandler(e) {
    const target = e.target.nextSibling;
    this.setState({ isOpen: !this.state.isOpen }, () => {
      target.style.display = this.state.isOpen ? 'block' : 'none';
    });
  }
  render() {
    return (
      <div className="listItem container">
        { this.state.episode.airdate }&nbsp;:&nbsp;
        { this.state.episode.airtime }&nbsp;:&nbsp;
        { this.state.episode.show.name }&nbsp;-&nbsp;
        <button onClick={ this.clickHandler}>{ this.state.isOpen ? 'Hide' : 'Show' }</button>

        <div className="row" style={{display: 'none'}}>
          <div className="three columns">{
            this.state.episode.show.image ?
              <img src={ this.state.episode.show.image.medium } alt={ this.state.episode.name }></img> :
              <p>No image provided</p>
          }</div>
          <div className="nine columns">
            <h5>
              <Link to={`/shows/${this.state.episode.show.id}`}>
                { this.state.episode.show.name }
              </Link>
            </h5>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default ListItemEp;
