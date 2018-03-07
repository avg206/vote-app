import { getNewImage } from './image'

export const SET_USER_VOTE = 'SET_USER_VOTE'
export const SET_USER_COMMENT = 'SET_USER_COMMENT'
export const RATE_IMAGE = 'RATE_IMAGE'

export const setVote = (score) => ({
  type: SET_USER_VOTE,
  score,
})

export const setComment = (comment) => ({
  type: SET_USER_COMMENT,
  comment,
})

export const rateImage = () => (dispatch) => {
  dispatch({ type: RATE_IMAGE })
  dispatch(getNewImage())
}
