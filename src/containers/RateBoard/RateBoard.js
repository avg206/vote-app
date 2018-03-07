import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import Rating from '../../components/Rating'
import { setVote, setComment, rateImage } from '../../actions'

class RateBoard extends Component {
  constructor (props) {
    super(props)

    this.onRatingChange = this.onRatingChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.onRateClick = this.onRateClick.bind(this)
  }

  onRatingChange (rating) {
    this.props.dispatch(setVote(rating))
  }

  onMessageChange (e) {
    this.props.dispatch(setComment(e.target.value))
  }

  onRateClick (e) {
    e.preventDefault()

    this.props.dispatch(rateImage())
  }

  render () {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <Rating rating={this.props.vote.score} onChange={this.onRatingChange} count={10} />
          <br /><br />
          <div className='field'>
            <textarea
              placeholder='You comment here...'
              onChange={this.onMessageChange}
            >
              {this.props.vote.message}
            </textarea>
          </div>
          <div className='field'>
            <button className='ui red button' onClick={this.onRateClick}>
              <i className='heart icon' /> Rate
            </button>
          </div>
        </form>
      </div>
    )
  }
}

RateBoard.propTypes = {
  vote: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  vote: state.vote,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action),
})

export default connect(mapStateToProps, mapDispatchToProps)(RateBoard)
