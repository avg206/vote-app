import { startLoader, stopLoader } from './loader'

export const FETCH_NEW_IMAGE = 'FETCH_NEW_IMAGE'
export const SAVE_NEW_IMAGE = 'SAVE_NEW_IMAGE'

export const saveImage = (src) => ({
  type: SAVE_NEW_IMAGE,
  src,
})

// const url = 'http://thecatapi.com/api/images/get?format=src&type=jpg';
const url = 'https://source.unsplash.com/random'

export const getNewImage = () => (dispatch) => {
  dispatch(startLoader())

  fetch(url)
    .then((resp) => {
      if (resp.status === 200) {
        dispatch(saveImage(resp.url))
      }

      dispatch(stopLoader())
    })
    .catch((err) => {
      console.log(err)
      dispatch(stopLoader())

      setTimeout(() => {
        dispatch(getNewImage())
      }, 5 * 1000)
    })
}
