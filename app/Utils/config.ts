// @ts-ignore
import axios, {AxiosInstance} from 'axios';
import {store} from '../redux/store';
import {setAuthToken, setFCMToken, setUser} from "../redux/reducers/userReducer";

import {BASE_URL} from './endpoints';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL
});
const GOOGLE_MAP_API_KEY = '';

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {authToken} = store.getState().root.user;

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );

    // HTTP_CLIENT.interceptors.response.use(
    //     response => {
    //         return response;
    //     },
    //     err => {
    //         console.log("eerror ====>>>",err);
    //         // return Promise.reject(err);
    //         if (err?.response?.status === 403){
    //             store.dispatch(setUser(null))
    //             store.dispatch(setAuthToken(null))
    //         }
    //         // return err
    //     },
    // );
};



async function requestUserPermission() {
  // const authStatus = await messaging().requestPermission();
  // const enabled =
  //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  // console.log("enabled ====>>>",enabled);
  // if (enabled) {
  //  await getToken();
  // }
}
const getToken = async () => {
    // await messaging()
    // .getToken()
    // .then(fcmToken => {
    //   console.log('FCM TOKE =====>>>>', fcmToken);
    //   if (fcmToken) {
    //     store.dispatch(setFCMToken(fcmToken));
    //   }
    // })
    // .catch(error => {});
};

export {
  HTTP_CLIENT,
  setupAxios,
  initialConfig,
  GOOGLE_MAP_API_KEY,
  requestUserPermission,
};
