import React from 'react';
import {SafeAreaView, View} from 'react-native';
import COMMON_STYLES from '../../themes/Styles';
import BackHeader from '../../components/BackHeader';
import {PAYMENT_STRINGS} from '../../constants/Strings';
import GradientLineTitle from '../../components/GradientLineTitle';
import styles from './style';
import {SVG} from '../../constants/Svg';
import SettingItem from '../../components/SettingItem';

class PaymentMethod extends React.PureComponent {
  getPaymentInfo = () => {
    const paymentData = {
      title: PAYMENT_STRINGS.CREDIT_CARD,
      icon: SVG.CREDIT_CARD,
      value: 'xxxx xxxx xxxx  1234',
    };
    const paypalData = {
      title: PAYMENT_STRINGS.PAYPAL,
      icon: SVG.PAYPAL,
      value: 'Wilson.casper@bernice.info',
    };
    const newCardData = {
      title: PAYMENT_STRINGS.ADD_NEW,
      icon: SVG.NEW_CARD,
    };
    return [paymentData, paypalData, newCardData];
  };

  renderOptions = () => {
    const array = this.getPaymentInfo();
    return (
      <View style={styles.optionContainer}>
        {array.map((item, index) => {
          return <SettingItem item={item} />;
        })}
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={COMMON_STYLES.container}>
        <BackHeader
          navigation={navigation}
          title={PAYMENT_STRINGS.PAYMENT_METHOD}
        />
        <View style={styles.container}>
          <GradientLineTitle title={PAYMENT_STRINGS.SAVED_PAYMENT} />
          {this.renderOptions()}
        </View>
      </SafeAreaView>
    );
  }
}

export default PaymentMethod;
