import {HTTP_CLIENT} from "../Utils/config";
import {BASE_URL, ENDPOINTS} from "../Utils/endpoints";

const loginUser = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

const signupUser = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGNUP, params);
};
const logOutUser = () => {
  return HTTP_CLIENT.get(ENDPOINTS.LOGOUT);
};

const verifyOTP = (params:any) => {
  return HTTP_CLIENT.post(ENDPOINTS.VERIFY_OTP,params);
};

const updateUserLocation = (params: any, token, callback) => {
  fetch(BASE_URL + ENDPOINTS.UPDATE_LOCATION, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then(response => response.json())
    .then(data => {
      console.log('response of loc ====>>>', data);
      callback(data);
    })
    .catch(error => {
      console.error('Error:', error);
      callback(error);
    });
};

export {loginUser, signupUser, updateUserLocation,logOutUser,verifyOTP};
