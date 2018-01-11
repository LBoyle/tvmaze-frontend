import React from 'react';
import { deleteFavouriteShow } from '../../actions/manageFavourites';
import getShow from '../../actions/getShow';
import { Link } from 'react-router-dom';

class ListItemShow extends React.Component {
  constructor(props){
    super(props);

    // external
    this.getShow = getShow.bind(this);
    // internal
    this.clickHandler = this.clickHandler.bind(this);
    this.deleteFavShow = this.deleteFavShow.bind(this);
    this.updateShow = this.updateShow.bind(this);
    this.state = {
      isOpen: false,
      showId: props.show,
      show: {}
    };
  }
  componentWillMount() {
    this.updateShow();
  }
  updateShow() {
    this.getShow(`/shows/${this.state.showId}`, res => {
      res.error ?
        console.log("Show url not recognised") :
        this.setState({ show: res });
    });
  }
  clickHandler(e) {
    const target = e.target.nextSibling;
    this.setState({ isOpen: !this.state.isOpen }, () => {
      target.style.display = this.state.isOpen ? 'block' : 'none';
    });
  }
  deleteFavShow(e) {
    deleteFavouriteShow(e.target.value);
  }
  render() {
    return (
      <div className="listItem container">
        { this.state.show.name }&nbsp;-&nbsp;
        <button onClick={ this.clickHandler}>{ this.state.isOpen ? 'Hide' : 'Show' }</button>

        <div className="row" style={{display: 'none'}}>
          <div className="three columns">{
            this.state.show.image ?
              <img src={ this.state.show.image.medium } alt={ this.state.show.name }></img> :
              <p>No image provided</p>
          }</div>
          <div className="three columns">
            <button value={this.state.show} onClick={ this.deleteFavShow }>Remove</button><br />
            <Link to={`/shows/${this.state.show.id}`}>
              { this.state.show.name }
            </Link>
          </div>

        </div>

        <hr />
      </div>
    );
  }
}

export default ListItemShow;

// <div className="nine columns">
//   <h5>
//     <Link to={`/shows/${this.state.item.show.id}`}>
//       { this.state.item.show.name }
//     </Link>
//   </h5>
// </div>
