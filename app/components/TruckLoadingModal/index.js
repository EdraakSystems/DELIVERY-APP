import React from 'react';
import {Modal, TouchableOpacity, Text} from 'react-native';
import {DRIVER_STRINGS} from '../../constants/Strings';
import styles from './style';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';

const TruckLoadingModal = props => {
  const {onRequestClose} = props;
  return (
    <Modal
      visible
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPress={onRequestClose}>
        <TouchableOpacity style={styles.childContainer} activeOpacity={1}>
          <TouchableOpacity style={styles.crossIcon} onPress={onRequestClose}>
            <SvgXml xml={SVG.SQUARE_CROSS} />
          </TouchableOpacity>
          <SvgXml
            xml={SVG.TRUCK_3}
            width={responsiveWidth(50)}
            height={responsiveHeight(25)}
          />
          <Text style={styles.titleText}>{DRIVER_STRINGS.TRUCK_LOADING}</Text>
          <Text style={styles.messageText}>
            PB 65 XXXX XX{DRIVER_STRINGS.TRUCK_LOADING_MESSAGE}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default TruckLoadingModal;
