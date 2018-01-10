import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render() {
    return (
      <li className="listItem">
        {this.props.item.airdate}: {this.props.item.airtime}: {this.props.item.show.name}
      </li>
    );
  }
}

export default ListItem;
