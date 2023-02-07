// import Toast from 'react-native-toast-message';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
// import Geocoder from 'react-native-geocoding';
// import Geolocation from 'react-native-geolocation-service';
import {GOOGLE_MAP_API_KEY} from '../utils/config';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {store} from '../redux/store';
import {
  setAuthToken,
  setUser,
  setUserLocation,
} from '../redux/reducers/userReducer';
import Toast from 'react-native-toast-message';
// import {COUNTRY_DATA} from '../utils/CountryData';
// import moment from 'moment';

const photoOptions = {
  mediaType: 'photo',
  // maxWidth: 300,
  // maxHeight: 300,
  includeBase64: true,
};

const videoOptions = {
  mediaType: 'video',
  durationLimit: 60,
  videoQuality: 'low',
};

export const addLeadingZero = (val: any) => {
  return val < 10 ? `0${val}` : val;
};

export const showToast = (text1, text2, type) => {
  Toast.show({text1, text2, type: type ? 'success' : 'error'});
};

export const randomNumberGenerator = () => {
  const result = [];
  while (result.length < 3) {
    const randomNum = Math.ceil(Math.random() * 10);
    if (result.indexOf(randomNum) === -1) result.push(randomNum);
  }
  return result.sort();
};
//
// export const getAddressOfUser = async (lat: any, long: any, callback: any) => {
//   await Geocoder.init(GOOGLE_MAP_API_KEY);
//   await Geocoder.from(lat, long)
//     .then(json => {
//       let addressComponent = {
//         address: json?.results[0]?.formatted_address,
//         state:
//           json?.results[0]?.address_components[7].long_name +
//           ' ' +
//           json?.results[0]?.address_components[8].long_name,
//         region: getRegion(json?.results[0]?.address_components[8].short_name),
//       };
//       callback(addressComponent);
//     })
//     .catch(error => {
//       callback(error);
//     });
// };
//
// export const getCoordinates = (address, placeId,callback) => {
//   let url = `https://maps.googleapis.com/maps/api/geocode/json?address="${address}'&key='${GOOGLE_MAP_API_KEY}`;
//   let url2 = `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_MAP_API_KEY}&placeid=${placeId}`;
//   fetch(url2)
//     .then(response => response.json())
//     .then(data => {
//       console.log('Coordinates from  address ======>>>>', data);
//
//       const latitude = data.result.geometry.location.lat;
//       const longitude = data.result.geometry.location.lng;
//       let tempArr = data.result.address_components;
//       let shortName = tempArr[tempArr?.length-1].short_name;
//       let address = {
//         latitude,
//         longitude,
//         region: getRegion(shortName),
//
//       }
//       callback(address);
//     });
// };
//
// const hasPermissionIOS = async () => {
//   const openSetting = () => {
//     Linking.openSettings().catch(() => {
//       Alert.alert('Unable to open settings');
//     });
//   };
//   const status = await Geolocation.requestAuthorization('whenInUse');
//
//   if (status === 'granted') {
//     return true;
//   }
//
//   if (status === 'denied') {
//     Alert.alert('Location permission denied');
//   }
//
//   if (status === 'disabled') {
//     Alert.alert(
//       `Turn on Location Services to allow Travego to determine your location.`,
//       '',
//       [
//         {text: 'Go to Settings', onPress: openSetting},
//         {text: "Don't Use Location", onPress: () => {}},
//       ],
//     );
//   }
//   return false;
// };
//
// const getAndroidPermission = async () => {
//   console.log('checking permisson');
//   const hasPermission = await PermissionsAndroid.check(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   );
//
//   if (hasPermission) {
//     return true;
//   } else {
//     const status = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     );
//     if (status === PermissionsAndroid.RESULTS.GRANTED) {
//       return true;
//     }
//
//     if (status === PermissionsAndroid.RESULTS.DENIED) {
//       // ToastAndroid.show(
//       //     'Location permission denied by user.',
//       //     ToastAndroid.LONG,
//       // );
//     } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//       // ToastAndroid.show(
//       //     'Location permission revoked by user.',
//       //     ToastAndroid.LONG,
//       // );
//     }
//   }
// };
// export const hasLocationPermission = async () => {
//   if (Platform.OS === 'ios') {
//     const hasPermission = await hasPermissionIOS();
//     return hasPermission;
//   } else if (Platform.OS === 'android') {
//     return getAndroidPermission();
//   } else {
//     return false;
//   }
// };
//
// export const getLocation = async (callback: any) => {
//   const hasPermission = await hasLocationPermission();
//
//   if (!hasPermission) {
//     return;
//   }
//
//   const options = {
//     accuracy: {
//       android: 'high',
//       ios: 'best',
//     },
//     // enableHighAccuracy: true,
//     timeout: 3600000,
//     // distanceFilter: 0,
//     // forceRequestLocation: true,
//     // forceLocationManager: true,
//     // showLocationDialog: true,
//   };
//   if (Platform.OS === 'ios') {
//     options['maximumAge'] = 10000;
//   }
//
//   await Geolocation.getCurrentPosition(
//     position => {
//       const currentLongitude = parseFloat(position.coords.longitude);
//       const currentLatitude = parseFloat(position.coords.latitude);
//       let location = {
//         latitude: currentLatitude,
//         longitude: currentLongitude,
//       };
//       getAddressOfUser(currentLatitude, currentLongitude, response => {
//         let location = {
//           latitude: currentLatitude,
//           longitude: currentLongitude,
//           address: response,
//         };
//         callback(location);
//         store.dispatch(setUserLocation(location));
//       });
//     },
//     error => {
//       // Alert.alert(`Code ${error.code}`, error.message);
//       console.log(error);
//     },
//     options,
//   );
// };
// export const openGallery = (video, callback: any) => {
//   launchImageLibrary(video ? videoOptions : photoOptions)
//     .then((response: any) => {
//       if (!response.didCancel) {
//         callback(response);
//       }
//     })
//     .catch(error => {});
// };
//
// export const openCamera = (video, callback: any) => {
//   launchCamera(video ? videoOptions : photoOptions)
//     .then((response: any) => {
//       if (!response.didCancel) {
//         callback(response);
//       }
//     })
//     .catch(error => {});
// };
//
// export const isObjectExist = object => {
//   if (object !== null && object !== undefined){
//     return Object.keys(object).length !== 0;
//   }
// };
// export const isArrayExist = array => {
//   return array?.length > 0;
// };
// export const getRegion = shortName => {
//   for (let i in COUNTRY_DATA) {
//     if (i?.toLowerCase() === shortName?.toLowerCase()) {
//       return COUNTRY_DATA[i];
//     }
//   }
// };
//
// export const dateCalc = (startDate, endDate) => {
//   let initialDate =
//     moment(startDate).format('DD') +
//     ' ' +
//     moment(startDate).format('MMM') +
//     ' - ';
//   let finalDate =
//     moment(endDate).format('DD') + ' ' + moment(endDate).format('MMM');
//
//   let month = moment(endDate).format('MMMM');
//   let date = initialDate + finalDate;
//
//   if (startDate === endDate) {
//     //if start date & end date is same then show Month Name
//     return month;
//   } else {
//     //return formatted time duration
//     return date;
//   }
// };
//
// export const flexibilityCalc = item => {
//   if (item?.anyTime) {
//     return 'Anytime';
//   } else if (item?.specificDays) {
//     return dateCalc(item?.specificDays?.startDate, item?.specificDays?.endDate);
//   } else if (item?.specificMonth) {
//     return item?.specificMonth;
//   }
// };
//
// export const logOutOnUnAuth = (error: any) => {
//   if (error?.response?.status === 403) {
//     store.dispatch(setUser(null));
//     store.dispatch(setAuthToken(null));
//   }
// };
//
// export const sum = (...theArgs) => {
//   let total = 0;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// };
//
// export const getCurrentDate = () => {
//   let today: any = new Date();
//   let dd = String(today.getDate()).padStart(2, '0');
//   let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   let yyyy = today.getFullYear();
//
//   today = yyyy + '/' + mm + '/' + dd;
//   return today;
// };
//
// export const getMonths = (startDate, endDate) => {
//   let start = startDate.split('-');
//   let end = endDate.split('-');
//   let startYear = parseInt(start[0]);
//   let endYear = parseInt(end[0]);
//   let dates = [];
//
//   for (let i = startYear; i <= endYear; i++) {
//     let endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
//     let startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
//     for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
//       let month = j + 1;
//       let displayMonth = month < 10 ? '0' + month : month;
//       let item = [i, displayMonth, '01'];
//       let day = moment(new Date(item)).format('MMMM');
//       dates.push(day);
//     }
//   }
//
//   return dates;
// };
//
// export const isWeekend = (date1, date2) => {
//   let d1 = new Date(date1),
//     d2 = new Date(date2),
//     isWeekend = false;
//
//   while (d1 < d2) {
//     let day = d1.getDay();
//     isWeekend = day === 6 || day === 0;
//     if (isWeekend) {
//       return true;
//     }
//     d1.setDate(d1.getDate() + 1);
//   }
//   return false;
// };
//
// export const trimText = (text: any, length: any) => {
//   let temp = text.slice(0, length);
//   return temp + '...';
// };
// export const convertCalenderDate = date => {
//   if (date) {
//     return moment(new Date(date)).format('YYYY-MM-DD');
//   } else {
//     return moment(new Date()).format('YYYY-MM-DD');
//   }
// };
//
// export const compareDates = (value1, value2) => {
//   let date1 = moment(new Date(value1)).format('YYYY-MM-DD');
//   let date2 = moment(new Date(value2)).format('YYYY-MM-DD');
//   return date1 === date2;
// };
//
// export const isFriend = (friendList, friendId) => {
//   return friendList?.some(item => (item?.id || item?._id) === friendId);
// };
//
// export const isItemExistInArray = (array, value) => {
//   return array?.some(item => item === value);
// };
//
// export const totalMembersCalc = (value1, value2, value3) => {
//   return value1 + value2 + value3 + ' Persons';
// };
//
// export const alertWindow = (title:any,message:any,onPressCancel:any,onPressOk:any) =>{
//    return Alert.alert(
//         title,
//         message,
//       [
//         {
//           text: "Cancel",
//           // onPress: () => console.log("Cancel Pressed"),
//           onPress: () => {onPressCancel()},
//           style: "cancel"
//         },
//         // { text: "OK", onPress: () => console.log("OK Pressed") }
//         { text: "OK", onPress: () => {onPressOk()} }
//       ]
//   );
// }
//

