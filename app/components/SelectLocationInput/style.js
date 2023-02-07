import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.GOLD_1,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(3),
    height: isPad ? responsiveHeight(7) : 60,
    borderRadius: 14,
    marginBottom: responsiveHeight(2),
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    width: isPad ? 50 : 32,
  },
  outerCircle: {
    height: responsiveWidth(isPad ? 3.5 : 5),
    width: responsiveWidth(isPad ? 3.5 : 5),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    borderColor: COLORS.GOLD_1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: responsiveWidth(isPad ? 1.5 : 2),
    width: responsiveWidth(isPad ? 1.5 : 2),
    borderRadius: responsiveWidth(isPad ? 1.5 : 2),
    backgroundColor: COLORS.GOLD_1,
  },
  titleText: {
    fontSize: FONT_SIZES.FONT_14,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  valueText: {
    fontSize: FONT_SIZES.FONT_16,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
