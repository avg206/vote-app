import * as actions from '../actions/image'

const initialstate = {
  src: '',
}

const image = (state = initialstate, action) => {
  switch (action.type) {
    case actions.SAVE_NEW_IMAGE:
      return { ...state, src: action.src }

    default:
      return state
  }
}

export default image
