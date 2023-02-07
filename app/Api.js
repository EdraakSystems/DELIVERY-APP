import axios from 'axios';
import idx from 'idx';
import {
  BASE_URL,
  DEFAULT_ERROR_RESPONSE,
  LOGIN,
  SIGN_UP,
  VERIFY_OTP,
} from './constants/Api';

axios.defaults.baseURL = BASE_URL;

export async function signup(params) {
  return axios
    .post(SIGN_UP, params)
    .then(res => {
      const status = idx(res, _ => _.status);
      const data = idx(res, _ => _.data.data);
      return {status, data};
    })
    .catch(error => {
      const status = idx(error, _ => _.response.status);
      const eData =
        idx(error, _ => _.response.data.returnMessage[0]) ||
        idx(error, _ => _.response.data.errors[0].message) ||
        idx(error, _ => _.response.data.message) ||
        DEFAULT_ERROR_RESPONSE;
      return {status, data: eData};
    });
}

export async function login(params) {
  return axios
    .post(LOGIN, params)
    .then(res => {
      const status = idx(res, _ => _.status);
      const data = idx(res, _ => _.data.data);
      return {status, data};
    })
    .catch(error => {
      const status = idx(error, _ => _.response.status);
      const eData =
        idx(error, _ => _.response.data.returnMessage[0]) ||
        idx(error, _ => _.response.data.errors[0].message) ||
        idx(error, _ => _.response.data.message) ||
        DEFAULT_ERROR_RESPONSE;
      return {status, data: eData};
    });
}

export async function verifyOtp(params) {
  return axios
    .post(VERIFY_OTP, params)
    .then(res => {
      const status = idx(res, _ => _.status);
      var data = idx(res, _ => _.data.data);
      return {status, data};
    })
    .catch(error => {
      const status = idx(error, _ => _.response.status);
      const eData =
        idx(error, _ => _.response.data.returnMessage[0]) ||
        idx(error, _ => _.response.data.errors[0].message) ||
        idx(error, _ => _.response.data.message) ||
        DEFAULT_ERROR_RESPONSE;
      return {status, data: eData};
    });
}
