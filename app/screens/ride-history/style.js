import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {responsiveHeight} from '../../Utils/ScalingUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  contentContainerStyle: {
    paddingTop: responsiveHeight(5),
  },
});

export default styles;
