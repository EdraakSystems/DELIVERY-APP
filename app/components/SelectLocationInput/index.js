import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './style';
import {SVG} from '../../constants/Svg';
import COMMON_STYLES from '../../themes/Styles';
import {isPad} from '../../Utils/ScalingUtils';

const SelectLocationInput = props => {
  const {title, value, isCurrentLocation, onPress} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <View style={styles.iconContainer}>
        {isCurrentLocation ? (
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
        ) : (
          <SvgXml
            width={isPad ? 30 : 22}
            height={isPad ? 30 : 22}
            xml={SVG.GOLD_LOCATION}
          />
        )}
      </View>
      <View style={COMMON_STYLES.flex}>
        <Text style={styles.titleText}>{title}</Text>
        {value ? (
          <Text style={styles.valueText} numberOfLines={1}>
            {value}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default SelectLocationInput;
