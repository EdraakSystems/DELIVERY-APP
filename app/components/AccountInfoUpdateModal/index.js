import React from 'react';
import {Modal, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import styles from './style';
import GradientLineTitle from '../GradientLineTitle';
import {ACCOUNT_STRINGS, BUTTON_STRINGS} from '../../constants/Strings';
import Input from '../TextInput';
import {Button} from '../Button';

const AccountInfoUpdateModal = props => {
  const {modalInfo, onRequestClose} = props;
  const [value, setValue] = React.useState(modalInfo.value);

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
        <KeyboardAvoidingView behavior="padding" enabled>
          <TouchableOpacity style={styles.childContainer} activeOpacity={1}>
            <GradientLineTitle
              title={`${
                ACCOUNT_STRINGS.UPDATE
              }${modalInfo.title.toLowerCase()}`}
            />
            <Input
              leftIcon={modalInfo.icon}
              wrapperStyle={styles.inputWrapperStyle}
              inputStyle={styles.inputStyle}
              value={value}
              onChangeText={t => setValue(t)}
              fromRegister
            />
            <Button title={BUTTON_STRINGS.SAVE} isBold />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
};

export default AccountInfoUpdateModal;
