import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import COMMON_STYLES from '../../themes/Styles';
import {HEADER_STRINGS} from '../../constants/Strings';

const LogoHeader = props => {
  const {rightButtonText, onPress} = props;
  return (
    <View style={styles.container}>
      <View style={COMMON_STYLES.rowAlignCenter}>
        <SvgXml width={36} height={36} xml={SVG.LOGO} />
        <Text style={styles.headerText}>{HEADER_STRINGS.PICKKUP}</Text>
      </View>
      {rightButtonText ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.rightButtonText}>{rightButtonText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default LogoHeader;
