import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import {isPad, responsiveWidth} from '../../Utils/ScalingUtils';

const SelectVehicleItem = props => {
  const {isSelected, onPress, item} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container(isSelected)}
      onPress={onPress}>
      <View style={styles.rowStyle}>
        <Image source={{uri:item?.imageUrl}} style={{height:responsiveWidth(25),width:responsiveWidth(25),resizeMode:'stretch',marginTop:20}}/>
        <SvgXml
          xml={SVG.INFO}
          height={isPad ? 20 : 12}
          width={isPad ? 20 : 12}
          style={styles.marginLeft}
        />
      </View>
      <Text style={styles.vehicleText}>{item.vehicleType}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </TouchableOpacity>
  );
};

export default SelectVehicleItem;
