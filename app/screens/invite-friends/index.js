import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';
import ScreenBackground from '../../components/ScreenBackground';
import BackHeader from '../../components/BackHeader/index';
import {INVITE_FRIEND_STRINGS} from '../../constants/Strings';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';

class InviteFriends extends React.PureComponent {
  onPressShare = async () => {
    const shareOptions = {
      title: 'Invite Friend',
      message: INVITE_FRIEND_STRINGS.SHARE_MESSAGE,
      failOnCancel: false,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log('ShareResponse =>', ShareResponse);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  render() {
    const {navigation} = this.props;
    const code = 'Ak524KJR69Ek';
    return (
      <ScreenBackground>
        <BackHeader
          navigation={navigation}
          title={INVITE_FRIEND_STRINGS.INVITE_FRIENDS}
        />
        <SvgXml
          xml={SVG.INVITE_DHAMAKA}
          width={responsiveWidth(90)}
          height={responsiveHeight(30)}
          style={styles.iconStyle}
        />
        <Text style={styles.referralText}>
          {INVITE_FRIEND_STRINGS.REFERRAL}
        </Text>
        <Text style={styles.messageText}>
          {INVITE_FRIEND_STRINGS.INVITE_MESSAGE}
        </Text>
        <View style={styles.rowStyle}>
          <Text style={styles.codeText}>{code}</Text>
          <TouchableOpacity onPress={() => Clipboard.setString(code)}>
            <Text style={styles.copyText}>
              {INVITE_FRIEND_STRINGS.COPY_CODE}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>{INVITE_FRIEND_STRINGS.OR}</Text>
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={this.onPressShare}>
          <SvgXml xml={SVG.ARROW_UP} style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.tapText}>{INVITE_FRIEND_STRINGS.TAP_ARROW}</Text>
      </ScreenBackground>
    );
  }
}

export default InviteFriends;
