import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './style';
import COLORS from '../../themes/Colors';
import COMMON_STYLES from '../../themes/Styles';

const Input = props => {
  const {
    title,
    keyboardType,
    wrapperStyle,
    value,
    onChangeText,
    fromRegister,
    inputStyle,
    leftIcon,
    placeholder,
    iconHeight,
    iconWidth,
    renderRightComponent,
  } = props;
  return (
    <View style={[styles.container(fromRegister), wrapperStyle]}>
      <View style={COMMON_STYLES.flex}>
        {title ? <Text style={styles.titleText}>{title}</Text> : null}
        <View style={styles.iconWrapper}>
          {leftIcon ? (
            <SvgXml
              height={iconHeight || 24}
              width={iconWidth || 24}
              xml={leftIcon}
              style={styles.iconStyle}
            />
          ) : null}
          <TextInput
            style={[styles.textInputStyle, inputStyle]}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={COLORS.GREY}
          />
        </View>
      </View>
      {renderRightComponent ? renderRightComponent() : null}
    </View>
  );
};

export default Input;
