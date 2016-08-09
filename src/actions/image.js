import { startLoader, stopLoader } from './loader';

export const FETCH_NEW_IMAGE = 'FETCH_NEW_IMAGE';
export const SAVE_NEW_IMAGE = 'SAVE_NEW_IMAGE';

export const saveImage = (src) => ({
  type: SAVE_NEW_IMAGE,
  src,
});

export const getNewImage = () => (dispatch) => {
  dispatch(startLoader());

  fetch('http://thecatapi.com/api/images/get?format=src&type=jpg')
    .then((resp) => {
      if (resp.status === 200) {
        dispatch(saveImage(resp.url));
      }

      dispatch(stopLoader());
    });
};
