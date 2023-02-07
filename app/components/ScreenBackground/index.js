import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import COMMON_STYLES from '../../themes/Styles';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../Utils/ScalingUtils';
import {SVG} from '../../constants/Svg';

const ScreenBackground = props => {
  return (
    <View style={COMMON_STYLES.container}>
      <SafeAreaView />
      <SvgXml
        width={DEVICE_WIDTH}
        height={DEVICE_HEIGHT}
        xml={SVG.SCREEN_BG}
        style={StyleSheet.absoluteFillObject}
      />
      {props.children}
      <SafeAreaView />
    </View>
  );
};

export default ScreenBackground;
