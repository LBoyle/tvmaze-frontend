import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      isOpen: false,
      item: props.item
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
      <li className="listItem container">
        { this.state.item.airdate }&nbsp;:&nbsp;
        { this.state.item.airtime }&nbsp;:&nbsp;
        { this.state.item.show.name }&nbsp;-&nbsp;
        <button onClick={ this.clickHandler}>{ this.state.isOpen ? 'Hide' : 'Show' }</button>

        <div className="row" style={{display: 'none'}}>
          <div className="three columns">{
            this.state.item.show.image ?
              <img src={ this.state.item.show.image.medium } alt={ this.state.item.name }></img> :
              <p>No image provided</p>
          }</div>
          <div className="nine columns">
            <h5>
              <Link to={'/show/' + this.state.item.id}>
                { this.state.item.show.name }
              </Link>
            </h5>
          </div>
        </div>

        <hr />
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object
}

export default ListItem;
