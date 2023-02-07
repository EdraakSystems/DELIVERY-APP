import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import COMMON_STYLES from '../../themes/Styles';
import BackHeader from '../../components/BackHeader';
import {WALLET_STRINGS} from '../../constants/Strings';
import {SVG} from '../../constants/Svg';
import {
  DEVICE_WIDTH,
  responsiveWidth,
  isPad,
  responsiveHeight,
} from '../../Utils/ScalingUtils';
import {SvgXml} from 'react-native-svg';
import styles from './style';
import SettingItem from '../../components/SettingItem';
import {SCREENS} from '../../constants/Screens';

const CARDS = [
  {
    card: SVG.CARD_1,
  },
  {
    card: SVG.CARD_1,
  },
  {
    card: SVG.CARD_1,
  },
];

export const CARD_WIDTH = isPad ? responsiveWidth(40) : 321;

class Wallet extends React.PureComponent {
  state = {
    activeSlide: 0,
  };

  _renderItem = ({item}) => {
    return (
      <SvgXml
        width={isPad ? responsiveWidth(40) : 321}
        height={isPad ? responsiveHeight(20) : 181}
        xml={item.card}
      />
    );
  };

  renderPagination = () => {
    const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={CARDS.length}
        activeDotIndex={activeSlide}
        dotContainerStyle={styles.dotContainerStyle}
        containerStyle={styles.containerStyle}
        dotStyle={styles.innerCircle}
        inactiveDotStyle={styles.innerCircle}
        dotElement={
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
        }
        inactiveDotElement={
          <View style={[styles.innerCircle, styles.dotContainerStyle]} />
        }
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  };

  renderAmount = () => {
    return (
      <View style={styles.priceView}>
        <SvgXml height={26} width={13} xml={SVG.DOLLAR} />
        <Text style={styles.amountText}>2500.00</Text>
      </View>
    );
  };

  getWalletInfo = () => {
    const paymentData = {
      title: WALLET_STRINGS.PAYMENT_METHOD,
      icon: SVG.EMAIL,
      screen: SCREENS.PAYMENT_METHOD,
    };
    const couponData = {
      title: WALLET_STRINGS.COUPON,
      icon: SVG.MOBILE,
      value: '3',
    };
    const integralData = {
      title: WALLET_STRINGS.INTEGRAL,
      icon: SVG.GENDER,
      value: '4500',
    };
    return [paymentData, couponData, integralData];
  };

  onPressOption = item => {
    const {navigation} = this.props;
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  renderOptions = () => {
    const array = this.getWalletInfo();
    return (
      <View style={styles.optionContainer}>
        {array.map((item, index) => {
          return (
            <SettingItem
              key={index.toString()}
              item={item}
              onPress={() => this.onPressOption(item)}
            />
          );
        })}
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={COMMON_STYLES.container}>
        <BackHeader navigation={navigation} title={WALLET_STRINGS.WALLET} />
        <View style={styles.container}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={CARDS}
            renderItem={this._renderItem}
            sliderWidth={DEVICE_WIDTH}
            itemWidth={CARD_WIDTH + responsiveWidth(3)}
            onSnapToItem={index => this.setState({activeSlide: index})}
            keyExtractor={(item, i) => `key - ${i}`}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            activeSlideAlignment={'start'}
            bounces={false}
            onBeforeSnapToItem={index => this.setState({activeSlide: index})}
            snapToInterval={CARD_WIDTH}
            enableMomentum
            decelerationRate={0.9}
            contentContainerCustomStyle={styles.contentContainerStyle(CARDS)}
          />
          {this.renderPagination()}
        </View>
        {this.renderAmount()}
        {this.renderOptions()}
      </SafeAreaView>
    );
  }
}

export default Wallet;
