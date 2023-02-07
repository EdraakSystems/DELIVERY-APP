import {COMMON_STRINGS} from './Strings';

export const BASE_URL =
  'http://pickkupserver-0862988c.centralindia.cloudapp.azure.com/api';

export const SIGN_UP = `${BASE_URL}/Accounts/signUp`;
export const LOGIN = `${BASE_URL}/Accounts/login`;
export const VERIFY_OTP = `${BASE_URL}/Accounts/verifyOtp`;

export const DEFAULT_ERROR_RESPONSE = {
  status: 500,
  error: 'common_error',
  error_description: COMMON_STRINGS.DEFAULT_ERROR_MESSAGE,
};
