import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import {isPad} from '../../Utils/ScalingUtils';

const BackHeader = props => {
  const {navigation, title} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
        <SvgXml
          width={isPad ? 22 : 14}
          height={isPad ? 22 : 14}
          xml={SVG.ANGLE_LEFT}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.emptyView} />
    </View>
  );
};

export default BackHeader;
