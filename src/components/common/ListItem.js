import React from 'react';

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
      <li className="listItem">
        {this.state.item.airdate}:
        {this.state.item.airtime}:
        {this.state.item.show.name} -
        <button onClick={this.clickHandler}>{ this.state.isOpen ? 'Hide' : 'Show' }</button>
        <div style={{display: 'none'}}>
          {
            this.state.item.show.image ?
              <img src={this.state.item.show.image.medium}></img> :
              <p>No image provided</p>
          }
        </div>
      </li>
    );
  }
}

export default ListItem;
