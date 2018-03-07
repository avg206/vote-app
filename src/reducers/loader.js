import * as actions from '../actions/loader'

const initialState = {
  isLoading: false,
}

const loader = (state = initialState, action) => {
  switch (action.type) {
    case actions.START_LOADER:
      return { ...state, isLoading: true }

    case actions.STOP_LOADER:
      return { ...state, isLoading: false }

    default:
      return state
  }
}

export default loader
