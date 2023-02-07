import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import COMMON_STYLES from '../../themes/Styles';

const LocationItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <SvgXml height={42} width={42} xml={SVG.HOME} />
      <View style={COMMON_STYLES.flex}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            {item.title}
          </Text>
          <SvgXml height={14} width={14} xml={SVG.HEART} />
        </View>
        <Text numberOfLines={1} style={styles.addressText}>
          {item.address}
        </Text>
      </View>
    </View>
  );
};

export default LocationItem;
