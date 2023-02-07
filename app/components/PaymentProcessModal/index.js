import React from 'react';
import {Modal, TouchableOpacity, Text, Image} from 'react-native';
import {BUTTON_STRINGS, PAYMENT_STRINGS} from '../../constants/Strings';
import styles from './style';
import {Button} from '../Button/index';
import {IMAGES} from '../../assets/images/index';

const PaymentProcessModal = props => {
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
          <Text style={styles.titleText}>
            {PAYMENT_STRINGS.PAYMENT_PROCESS}
          </Text>
          <Text style={styles.messageText}>{PAYMENT_STRINGS.DO_NOT_CLOSE}</Text>
          <Image source={IMAGES.PAYMENT_PROCESS} style={styles.imageStyle} />
          <Button title={BUTTON_STRINGS.NEXT} isBold />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default PaymentProcessModal;
