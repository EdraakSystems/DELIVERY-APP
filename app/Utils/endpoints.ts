//TODO Live URL
// const BASE_URL = 'https://travego-backend.herokuapp.com/api/v1/';
// const SOCKET_URL = 'https://travego-backend.herokuapp.com';

//TODO NGROCK URL
const BASE_URL = "http://pickkupserver-0862988c.centralindia.cloudapp.azure.com/api/";
const SOCKET_URL = "https://bb00-110-39-152-42.in.ngrok.io";

const ENDPOINTS = {
  // ========================= USER ========================//

  LOGIN: 'Accounts/login',
  SIGNUP: 'Accounts/signUp',
  UPDATE_LOCATION: 'user/update-location',
  SOCIAL_LOGIN: 'auth/social-login',
  LOGOUT: 'auth/logout',
  RESET_PASSWORD: 'user/change-password',
  SEND_OPT: 'user/send-forget-otp',
  VERIFY_OTP: 'Accounts/verifyOtp',
  CREATE_NEW_PASSWORD: 'user/forget-password',

  // ========================= PROFILES ========================//

  MY_PROFILE: 'user/me',
  UPDATE_PROFILE: 'user/update-profile',
  USER_PROFILE: 'user',

  // ========================= GENERAL ========================//

  VEHICLE_TYPE: 'customer/VehicleTypes',
  STUFF_CATEGORY: 'stuff-category',
  ADD_PROPERTY: 'listing',

  // ========================= LISTING ========================//

  LISTING_BY_STUFF: 'listing/by-stuff',
  LISTING_BY_LOCATION: 'listing/near-by-listing',
  LISTING_DETAIL: 'listing/detail',
  SEARCH_LISTING: 'listing/search',

  // =================== EXCHANGE REQUEST ======================//

  CREATE_EXCHANGE_REQUEST: 'exchange/create-exchange',
  MODIFY_EXCHANGE_REQUEST: 'exchange/modify',
  EXCHANGE_LIST: 'exchange/exchange-list',
  REVIEW_EXCHANGE: 'exchange/review-exchange',

  // ======================== FRIENDS ======================//

  ADD_FRIEND: 'user/add-friend',
  SEND_FRIEND_REQUEST: 'user/send-friend-req',
  GET_FRIENDS_LIST: 'user/get-friends-list',
  REMOVE_FRIEND: 'user/unfriend',

  // ======================== CHAT ======================//

  CREATE_CONVERSATION: 'conversation/create-conversation',
  CHECK_CONVERSATION: 'conversation/check-conversation',
  GET_CONVERSATION: 'conversation/get-conversation',
  DELETE_CONVERSATION:"conversation/delete-conversation",

  // ========================= END ========================//
};

export {ENDPOINTS, BASE_URL, SOCKET_URL};
