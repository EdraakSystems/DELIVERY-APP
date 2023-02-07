import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  PanResponder,
  LayoutAnimation,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import MapView, {Marker, Polyline} from 'react-native-maps';
import COMMON_STYLES from '../../themes/Styles';
import styles from './style';
import {SVG} from '../../constants/Svg';
import SelectLocationInput from '../../components/SelectLocationInput';
import {LOCATION_STRINGS, BUTTON_STRINGS} from '../../constants/Strings';
import {Button} from '../../components/Button';
import {IMAGES} from '../../assets/images';
import {SCREENS} from '../../constants/Screens';
import {responsiveWidth, isPad} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/reducers/userReducer";

const CURRENT_POINTS = {latitude: 37.78825, longitude: -122.4324};
const HOME_POINTS = {
  latitude: 37.79537229636079,
  longitude: -122.42940679342547,
};
const TRUCK_POINTS = {
  latitude: 37.795270637703005,
  longitude: -122.43698786253245,
};
let panResponder = "";

const ChooseCurrentDropLocation = (props) => {

    const [collapsed,setCollapsed] = useState(false);
    const {navigation} = props;
    const dispatch = useDispatch();


    useEffect(()=>{
         panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderRelease: onPanResponderRelease,
        });
    },[])
  // UNSAFE_componentWillMount() {
  //   this.panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onPanResponderRelease: this.onPanResponderRelease,
  //   });
  // }

  const onPanResponderRelease = (event, gestureState) => {
    if (gestureState.dy < -30 || gestureState.dy < 30) {
      LayoutAnimation.linear();
      setCollapsed(false)
    } else {
      LayoutAnimation.linear();
      setCollapsed(true)
    }
  };

  const renderCurrentMarker = () => {
    return (
      <Marker
        anchor={{
          x: 0.5,
          y: 0.5,
        }}
        coordinate={CURRENT_POINTS}>
        <SvgXml
          width={responsiveWidth(isPad ? 13 : 22)}
          height={responsiveWidth(isPad ? 13 : 22)}
          xml={SVG.LOCATION_TRACKER}
        />
      </Marker>
    );
  };

  const renderHomeMarker = () => {
    return (
      <Marker
        anchor={{
          x: 0.5,
          y: 0.5,
        }}
        coordinate={HOME_POINTS}>
        <SvgXml
          width={responsiveWidth(isPad ? 8 : 15)}
          height={responsiveWidth(isPad ? 8 : 15)}
          xml={SVG.HOME}
        />
      </Marker>
    );
  };

  const renderTruckMarker = () => {
    return (
      <Marker
        anchor={{
          x: 0.5,
          y: 0.5,
        }}
        coordinate={TRUCK_POINTS}>
        <SvgXml
          width={responsiveWidth(isPad ? 8 : 15)}
          height={responsiveWidth(isPad ? 8 : 15)}
          xml={SVG.TRUCK_4}
        />
      </Marker>
    );
  };

  const renderPolyLines = () => {
    return (
      <>
        <Polyline
          coordinates={[TRUCK_POINTS, CURRENT_POINTS, HOME_POINTS]}
          strokeColor={COLORS.GOLD}
          strokeWidth={3}
        />
        <Polyline
          coordinates={[TRUCK_POINTS, CURRENT_POINTS, HOME_POINTS]}
          strokeColor={COLORS.GOLD_9}
          strokeWidth={12}
        />
      </>
    );
  };

  const renderLocationDetails = () => {
    return (
      <View style={styles.detailsView} {...panResponder.panHandlers}>
        <SvgXml
          width={25}
          height={25}
          xml={SVG.DOWN_ARROW}
          style={styles.iconStyle}
        />
        <SelectLocationInput
          isCurrentLocation
          title={LOCATION_STRINGS.CURRENT_LOC}
          value={'3605 Parker Rd.'}
          onPress={() =>
            navigation.navigate(SCREENS.SELECT_PICKUP_DROP_LOCATION)
          }
        />
        <SelectLocationInput
          title={LOCATION_STRINGS.DROP_OFF}
          onPress={() =>
            navigation.navigate(SCREENS.SELECT_PICKUP_DROP_LOCATION, {
              isDrop: true,
            })
          }
        />
        <Button
          title={BUTTON_STRINGS.SEARCH_NOW}
          isBold
          onPress={() => navigation.navigate(SCREENS.SELECT_VEHICLE)}
        />
        <SafeAreaView />
      </View>
    );
  };

  const renderUserProfile = () => {
    return (
      <TouchableOpacity
      style={styles.profileContainer}
          onPress={() => navigation.navigate(SCREENS.SETTINGS)}>
        <Image source={IMAGES.USER_PROFILE} style={styles.userImage} />
      </TouchableOpacity>
    );
  };

    return (
      <View style={COMMON_STYLES.container}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {renderCurrentMarker()}
          {renderHomeMarker()}
          {renderTruckMarker()}
          {renderPolyLines()}
        </MapView>
        {renderUserProfile()}
        {renderLocationDetails()}
      </View>
    );
}

export default ChooseCurrentDropLocation;
