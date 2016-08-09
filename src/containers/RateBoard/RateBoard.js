import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Rating from '../../components/Rating';
import { setVote } from '../../actions';

class RateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };

    this.onRatingChange = this.onRatingChange.bind(this);
  }

  onRatingChange(rating) {
    this.props.dispatch(setVote(rating));
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <Rating rating={this.props.vote.score} onChange={this.onRatingChange} />
          <br /><br />
          <div className="field">
            <textarea placeholder="You comment here...">{this.props.vote.message}</textarea>
          </div>
        </form>
      </div>
    );
  }
}

RateBoard.propTypes = {
  vote: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  vote: state.vote,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(RateBoard);
