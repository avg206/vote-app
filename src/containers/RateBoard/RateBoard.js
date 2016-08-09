import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';


class RateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui segment" />
    );
  }
}

RateBoard.propTypes = {
};

const mapStateToProps = () => ({
});

export default connect(mapStateToProps)(RateBoard);
