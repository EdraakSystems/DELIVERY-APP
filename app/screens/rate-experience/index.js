import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  UIManager,
  TextInput,
  Animated,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import BackHeader from '../../components/BackHeader/index';
import {RATE_STRINGS, BUTTON_STRINGS} from '../../constants/Strings';
import COMMON_STYLES from '../../themes/Styles';
import styles from './style';
import {SVG} from '../../constants/Svg';
import {RATE_OPTIONS} from '../../constants/RateOptions';
import COLORS from '../../themes/Colors';
import {Button} from '../../components/Button';
import {responsiveHeight, isPad} from '../../Utils/ScalingUtils';

class RateExperience extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      animation: new Animated.Value(1),
    };
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }

  renderDriverDetails = () => {
    return (
      <View style={styles.profileView}>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.driverImage}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Shiv Kumar</Text>
          <Text style={styles.subscriptionText}>
            Tata Ace Gold ( PB 00 A 0000 )
          </Text>
        </View>
        <SvgXml
          xml={SVG.TRUCK_2}
          width={isPad ? 160 : 88}
          height={isPad ? 120 : 48}
        />
      </View>
    );
  };

  startAnimation = index => {
    Animated.timing(this.state.animation, {
      toValue: 0.5,
      timing: 0,
    }).start(() => {
      this.setState({selectedIndex: index}, () => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 0,
        }).start();
      });
    });
  };

  renderSelectedEmoji = () => {
    const {selectedIndex} = this.state;
    const animatedStyle = {
      opacity: this.state.animation,
    };
    return (
      <Animated.View style={[styles.selectedView, animatedStyle]}>
        <Text style={styles.selectedRateText}>
          {RATE_OPTIONS[selectedIndex].title}
        </Text>
        <SvgXml
          height={responsiveHeight(18)}
          width={responsiveHeight(18)}
          xml={RATE_OPTIONS[selectedIndex].emoji}
        />
      </Animated.View>
    );
  };

  renderEmoji = () => {
    return (
      <View style={styles.rateView}>
        {RATE_OPTIONS.map((option, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={styles.emojiView}
              onPress={() => {
                this.startAnimation(index);
              }}>
              <SvgXml
                height={isPad ? 60 : 40}
                width={isPad ? 60 : 40}
                xml={option.emoji}
              />
              <Text style={styles.rateNameText}>{option.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  renderTextInput = () => {
    return (
      <TextInput
        style={styles.inputStyle}
        placeholder={RATE_STRINGS.WE_SHOULD}
        placeholderTextColor={COLORS.GREY}
        multiline
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={COMMON_STYLES.container}>
        <BackHeader navigation={navigation} title={RATE_STRINGS.RATE} />
        {this.renderDriverDetails()}
        {this.renderSelectedEmoji()}
        {this.renderEmoji()}
        {this.renderTextInput()}
        <Button title={BUTTON_STRINGS.SUBMIT_REVIEW} isBold />
      </SafeAreaView>
    );
  }
}

export default RateExperience;
