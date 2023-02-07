import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import {responsiveWidth, isPad} from '../../Utils/ScalingUtils';

const BackIcon = props => {
  const {navigation, isDark} = props;
  return (
    <TouchableOpacity
      style={styles.container(isDark)}
      onPress={() => navigation.pop()}>
      <SvgXml
        width={responsiveWidth(isPad ? 2 : 3)}
        height={responsiveWidth(isPad ? 2 : 3)}
        xml={isDark ? SVG.ARROW_LEFT_GOLD : SVG.ARROW_LEFT}
      />
    </TouchableOpacity>
  );
};

export default BackIcon;
