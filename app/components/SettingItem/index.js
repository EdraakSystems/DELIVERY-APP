import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import COMMON_STYLES from '../../themes/Styles';
import {isPad} from '../../Utils/ScalingUtils';

const SettingItem = props => {
  const {item, wrapperStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.container, wrapperStyle]}
      onPress={onPress}>
      <View style={COMMON_STYLES.rowAlignCenter}>
        <SvgXml
          width={isPad ? 35 : 24}
          height={isPad ? 35 : 24}
          xml={item.icon}
        />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={COMMON_STYLES.rowAlignCenter}>
        {item.value ? <Text style={styles.valueText}>{item.value}</Text> : null}
        <SvgXml
          width={isPad ? 20 : 12}
          height={isPad ? 20 : 12}
          xml={SVG.ANGLE_RIGHT}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
