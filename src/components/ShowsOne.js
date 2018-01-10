import React from 'react';
import PropTypes from 'prop-types';

class ShowsOne extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Single Show</h3>
      </div>
    );
  }
}

ShowsOne.propTypes = {
  showurl: PropTypes.object
}

export default ShowsOne;

// <div dangerouslySetInnerHTML={{ __html: this.state.item.show.summary }}></div>
