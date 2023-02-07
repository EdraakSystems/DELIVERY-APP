import {StyleSheet} from 'react-native';
import {responsiveWidth} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(4),
  },
  linearGradient: {
    height: 1,
  },
  titleText: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_16,
    marginBottom: 10,
  },
});

export default styles;
