import makeActionCreator from '../utils/actionFactory';
import CancerBaseSDK from '../../../platform/sdk/react-native/cancerbase-sdk';

export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const toggleEvent = makeActionCreator(TOGGLE_EVENT, 'appName');

export const UPLOAD_PROFILE_PICTURE_SUCCESS = 'UPLOAD_PROFILE_PICTURE_SUCCESS';
export const uploadProfilePictureSuccess = makeActionCreator(
  UPLOAD_PROFILE_PICTURE_SUCCESS,
  'imageUrl'
);

export const uploadProfilePicture = (base64Img) => {
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

    dispatch(uploadProfilePictureSuccess(url));
  };
};
