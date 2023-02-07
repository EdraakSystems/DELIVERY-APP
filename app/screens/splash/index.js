import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { IMAGES } from "../../assets/images/index";

const SplashScreen = ({ navigation }) => {
  const checkLogin = async () => {
    navigation.navigate("ONBOARDING");
  };
  useEffect(() => {
    setTimeout(function () {
      checkLogin();
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={styles.logo} source={IMAGES.SPLASH_ICON} />

      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {"Created By EdraakSystems"}
          </Text>
        </View>
        <View style={{ alignItems: "center", width: "100%" }}>
          <View
            style={{
              borderBottomWidth: 2,
              width: "50%",
              marginTop: "2%",
              borderColor: "#008389",
            }}
          />
        </View>

        <Image
          style={styles.logo2}
          source={require("../../assets/images/edraakLogo.png")}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    width: "45%",
    height: "45%",
    resizeMode: "contain",
  },
  logo2: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
    marginTop: 30,
    marginRight: 30,
  },
});
// import React from 'react';
// import {Image, View, StatusBar} from 'react-native';
// import {connect} from 'react-redux';
// import styles from './style';
// import {IMAGES} from '../../assets/images/index';
// import {resetRoute} from '../../Utils/NavigationUtils';
// import {SCREENS} from '../../constants/Screens';
// import COLORS from '../../themes/Colors';
// import moment from 'moment';

// class Splash extends React.PureComponent {
//   componentDidMount = () => {
//     const {navigation, expireTime} = this.props;
//     const current = moment().format('YYYY/MM/DD HH:mm');
//     if (expireTime === '' || moment(current).isAfter(expireTime)) {
//       resetRoute(navigation, SCREENS.ONBOARDING);
//     } else {
//       resetRoute(navigation, SCREENS.CHOOSE_CURRENT_DROP_LOCATION);
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar
//           translucent={false}
//           backgroundColor={COLORS.PURE_BLACK}
//           barStyle={'dark-content'}
//         />
//         <Image source={IMAGES.SPLASH_ICON} style={styles.imageLogo} />
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//   const {authReducer} = state;
//   const {authData, expireTime} = authReducer;
//   return {
//     authData,
//     expireTime,
//   };
// };

// export default connect(mapStateToProps)(Splash);
