import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {INVITATION_STRINGS} from '../../constants/Strings';
import COMMON_STYLES from '../../themes/Styles';
import moment from 'moment';

const InvitationItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.userImage} />
      <View style={COMMON_STYLES.flex}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.inviteText}>
          {INVITATION_STRINGS.INVITED}
          <Text style={styles.dateText}>
            {moment(item.date).format('DD MMM, YYYY')}
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonStyle(item.isJoined)}>
        <Text style={styles.buttonText(item.isJoined)}>
          {item.isJoined
            ? INVITATION_STRINGS.JOINED
            : INVITATION_STRINGS.IN_PROCESS}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvitationItem;
