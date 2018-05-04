import makeActionCreator from '../utils/actionFactory';
import CancerBaseSDK from 'cancerbase-sdk';

export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const toggleEvent = makeActionCreator(TOGGLE_EVENT, 'appName');

export const UPDATE_PROFILE_PICTURE_SUCCESS = 'UPDATE_PROFILE_PICTURE_SUCCESS';
export const updateProfilePictureSuccess = makeActionCreator(
  UPDATE_PROFILE_PICTURE_SUCCESS,
  'imageUrl'
);

export const updateProfilePicture = (base64Img) => {
  return async (dispatch) => {
    console.log('in redux');
    const apiUrl = 'https://api.cloudinary.com/v1_1/dvocyuziz/image/upload';
    const data = {
      file: base64Img,
      upload_preset: 'lheqvtkv',
    };

    let url;
    try {
      const res = await fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
      });
      url = JSON.parse(res._bodyText).secure_url;
      CancerBaseSDK.user.profilePicture = url;
      console.log(CancerBaseSDK.user.profilePicture);
    }
    catch (e) {
      console.log(e);
    }

    dispatch(updateProfilePictureSuccess(url));
  };
};
