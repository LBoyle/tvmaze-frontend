import React from 'react';
import getShow from '../../actions/getShow';
import { Link } from 'react-router-dom';

class ListItemShow extends React.Component {
  constructor(props){
    super(props);

    // external
    this.getShow = getShow.bind(this);
    // internal
    this.clickHandler = this.clickHandler.bind(this);
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
  componentDidMount() {
    this.detailsBox = document.getElementById(this.state.show.id ? this.state.show.id : this.state.showId);
  }
  updateShow() {
    this.getShow((this.state.show.id ? this.state.show.id : this.state.showId), res => {
      res.error ?
        console.log("Show url not recognised") :
        this.setState({ show: res });
    });
  }
  clickHandler(e) {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.detailsBox.classList.toggle('hide');
    });
  }
  render() {
    return (
      <li className="listItem container">
        { this.state.show.name }&nbsp;-&nbsp;
        <button onClick={ this.clickHandler}>{ this.state.isOpen ? 'Hide' : 'Show' }</button>

        <div className="row hide" id={ this.state.show.id ? this.state.show.id : this.state.showId }>

          <div className="imgBox columns">{
            this.state.show.image ?
              <img src={ this.state.show.image.medium } alt={ this.state.show.name }></img> :
              <p>No image provided</p>
          }</div>
          <div className="descBox columns">
            <button value={ this.state.show.id } onClick={ this.props.delHandler }>Remove</button><br />
            <Link to={`/shows/${this.state.show.id}`}>
              { this.state.show.name }
            </Link>
          </div>

        </div>

        <hr />
      </li>
    );
  }
}

export default ListItemShow;
