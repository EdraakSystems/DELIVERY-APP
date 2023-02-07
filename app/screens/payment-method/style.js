import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../../Utils/ScalingUtils';

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(3),
  },
  optionContainer: {
    paddingTop: responsiveHeight(1),
  },
});

export default styles;
