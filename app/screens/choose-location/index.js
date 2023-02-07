import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import COMMON_STYLES from '../../themes/Styles';
import {
  responsiveHeight,
  responsiveWidth,
  isPad,
} from '../../Utils/ScalingUtils';
import {SVG} from '../../constants/Svg';
import styles from './style';
import {CHOOSE_LOC_STRINGS, BUTTON_STRINGS} from '../../constants/Strings';
import {Button} from '../../components/Button';
import {SCREENS} from '../../constants/Screens';
import {IMAGES} from '../../assets/images/index';

class ChooseLocation extends React.PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <View style={COMMON_STYLES.container}>
        <Image
          source={IMAGES.ONBOARDING_4}
          style={{
            height: responsiveHeight(isPad ? 70 : 60),
            width: responsiveWidth(100),
          }}
          resizeMode={'stretch'}
        />
        <Text style={styles.titleText}>{CHOOSE_LOC_STRINGS.MEET_YOU}</Text>
        <Text style={styles.messageText}>
          {CHOOSE_LOC_STRINGS.CHOOSE_LOCATION}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title={BUTTON_STRINGS.USE_LOCATION}
            icon={SVG.LOCATION}
            onPress={() => navigation.navigate(SCREENS.LOGIN)}
          />
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <Text style={styles.buttonText}>
              {BUTTON_STRINGS.SELECT_MANUALLY}
            </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

export default ChooseLocation;
