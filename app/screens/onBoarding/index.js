import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SvgXml} from 'react-native-svg';
import styles from './style';
import {ONBOARDING_DATA} from '../../constants/OnBoardingData';
import {SVG} from '../../constants/Svg';
import {
  DEVICE_WIDTH,
  responsiveHeight,
  responsiveWidth,
  isPad,
} from '../../Utils/ScalingUtils';
import COMMON_STYLES from '../../themes/Styles';
import {SCREENS} from '../../constants/Screens';

class OnBoarding extends React.PureComponent {
  state = {
    activeSlide: 0,
  };

  _renderItem = ({item, index}) => {
    return (
      <View key={index.toString()}>
        <Image
          source={item.image}
          style={{
            height: responsiveHeight(isPad ? 70 : 60),
            width: responsiveWidth(100),
          }}
          resizeMode={'stretch'}
        />
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
    );
  };

  renderPagination = () => {
    const {activeSlide} = this.state;
    const {navigation} = this.props;
    return (
      <View style={COMMON_STYLES.rowSpaceBetween}>
        <Pagination
          dotsLength={ONBOARDING_DATA.length}
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
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate(SCREENS.CHOOSE_LOCATION)}>
          <SvgXml
            width={responsiveWidth(isPad ? 3 : 4)}
            height={responsiveWidth(isPad ? 3 : 4)}
            xml={SVG.ARROW_RIGHT}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={COMMON_STYLES.container}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={ONBOARDING_DATA}
          renderItem={this._renderItem}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH}
          onSnapToItem={index => this.setState({activeSlide: index})}
        />
        {this.renderPagination()}
        <SafeAreaView />
      </View>
    );
  }
}

export default OnBoarding;
