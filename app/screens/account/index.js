import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import BackHeader from '../../components/BackHeader';
import COMMON_STYLES from '../../themes/Styles';
import {ACCOUNT_STRINGS} from '../../constants/Strings';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import styles from './style';
import GradientLineTitle from '../../components/GradientLineTitle';
import SettingItem from '../../components/SettingItem';
import AccountInfoUpdateModal from '../../components/AccountInfoUpdateModal';
import {isPad} from '../../Utils/ScalingUtils';

class Account extends React.PureComponent {
  state = {
    modalVisible: false,
    modalInfo: {},
  };

  renderProfileData = () => {
    return (
      <View style={styles.profileView}>
        <View style={styles.outerCircle2}>
          <View style={styles.outerCircle1}>
            <SvgXml
              height={isPad ? 100 : 74}
              width={isPad ? 100 : 74}
              xml={SVG.USER_IMAGE}
            />
          </View>
        </View>
        <Text style={styles.userNameText}>Ram Niwas Kumar</Text>
        <Text style={styles.subscriptionText}>
          Tata Ace Gold ( PB 00 A 0000 )
        </Text>
        <View style={styles.planView}>
          <SvgXml height={30} width={36} xml={SVG.GOLD_TROPHY} />
          <Text>Gold Member</Text>
        </View>
      </View>
    );
  };

  getPersonalInfo = () => {
    const emailData = {
      title: ACCOUNT_STRINGS.EMAIL,
      icon: SVG.EMAIL,
      value: 'Freeslab88@gmail.com',
    };
    const mobileData = {
      title: ACCOUNT_STRINGS.MOBILE,
      icon: SVG.MOBILE,
      value: '+84 905 07 00 17',
    };
    const genderData = {
      title: ACCOUNT_STRINGS.GENDER,
      icon: SVG.GENDER,
      value: 'Male',
    };
    const birthdayData = {
      title: ACCOUNT_STRINGS.BIRTHDAY,
      icon: SVG.BIRTHDAY,
      value: 'April 16, 1988',
    };
    return [emailData, mobileData, genderData, birthdayData];
  };

  renderPersonalInfo = () => {
    const array = this.getPersonalInfo();
    return (
      <View>
        <GradientLineTitle title={ACCOUNT_STRINGS.PERSONAL_INFO} />
        {array.map((item, index) => {
          return (
            <SettingItem
              key={index.toString()}
              item={item}
              onPress={() =>
                this.setState({modalVisible: true, modalInfo: item})
              }
            />
          );
        })}
      </View>
    );
  };

  renderModal = () => {
    const {modalVisible, modalInfo} = this.state;
    if (modalVisible) {
      return (
        <AccountInfoUpdateModal
          onRequestClose={() => this.setState({modalVisible: false})}
          modalInfo={modalInfo}
        />
      );
    }
    return null;
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={COMMON_STYLES.container}>
        <BackHeader navigation={navigation} title={ACCOUNT_STRINGS.ACCOUNT} />
        {this.renderProfileData()}
        {this.renderPersonalInfo()}
        {this.renderModal()}
      </SafeAreaView>
    );
  }
}

export default Account;
