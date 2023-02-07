import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './style';
import {isPad} from '../../Utils/ScalingUtils';

export const Button = props => {
  const {onPress, title, icon, isBold, disabled, iconHeight, iconWidth} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.buttonStyle(disabled)}
      onPress={onPress}>
      {icon ? (
        <SvgXml
          width={iconHeight || (isPad ? 22 : 16)}
          height={iconWidth || (isPad ? 24 : 18)}
          xml={icon}
          style={styles.iconStyle}
        />
      ) : null}
      <Text style={styles.buttonText(isBold)}>{title}</Text>
    </TouchableOpacity>
  );
};
