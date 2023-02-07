import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';
import COLORS from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    paddingLeft: responsiveWidth(2),
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_18,
    color: COLORS.BLACK_1,
  },
  rightButtonText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_20,
    color: COLORS.BLACK,
  },
});

export default styles;
