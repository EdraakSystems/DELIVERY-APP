import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';
import COLORS from '../../themes/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_32,
    color: COLORS.BLACK,
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(2),
  },
  messageText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_18,
    lineHeight: FONT_SIZES.FONT_30,
    color: COLORS.BLACK,
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(2),
  },
  innerCircle: {
    height: responsiveWidth(isPad ? 1.5 : 2),
    width: responsiveWidth(isPad ? 1.5 : 2),
    borderRadius: responsiveWidth(isPad ? 1.5 : 2),
    backgroundColor: COLORS.BLACK_1,
  },
  outerCircle: {
    height: responsiveWidth(isPad ? 3.5 : 5),
    width: responsiveWidth(isPad ? 3.5 : 5),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    borderColor: COLORS.GOLD,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(isPad ? 2 : 3),
  },
  roundButton: {
    height: responsiveWidth(isPad ? 8 : 11),
    width: responsiveWidth(isPad ? 8 : 11),
    borderRadius: responsiveWidth(12),
    backgroundColor: COLORS.BLACK_1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(4),
  },
  dotContainerStyle: {
    marginHorizontal: 0,
    marginRight: responsiveWidth(isPad ? 2 : 3),
  },
  containerStyle: {
    alignSelf: 'flex-start',
    paddingHorizontal: 0,
    paddingLeft: responsiveWidth(4),
  },
});

export default styles;
