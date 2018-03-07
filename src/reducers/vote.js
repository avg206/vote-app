import * as actions from '../actions/vote'

const initialState = {
  score: 0,
  comment: '',
}

const vote = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_VOTE:
      return { ...state, score: action.score }

    case actions.SET_USER_COMMENT:
      return { ...state, comment: action.comment }

    case actions.RATE_IMAGE:
      return initialState

    default:
      return state
  }
}

export default vote
