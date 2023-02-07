import React from 'react';
import {Modal, TouchableOpacity, Text, Image} from 'react-native';
import {BUTTON_STRINGS, DRIVER_STRINGS} from '../../constants/Strings';
import styles from './style';
import {Button} from '../Button/index';
import {IMAGES} from '../../assets/images/index';

const SearchDriverModal = props => {
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
            {DRIVER_STRINGS.SEARCHING_DRIVER}
          </Text>
          <Text style={styles.messageText}>{DRIVER_STRINGS.THANKS_MSG}</Text>
          <Image source={IMAGES.SEARCH_DRIVER} style={styles.imageStyle} />
          <Button title={BUTTON_STRINGS.CANCEL} isBold />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default SearchDriverModal;
