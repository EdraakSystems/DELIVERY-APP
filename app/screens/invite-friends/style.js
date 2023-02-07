import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';
import COLORS from '../../themes/Colors';

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  referralText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_32,
    color: COLORS.BLACK,
    textAlign: 'center',
    marginTop: responsiveHeight(6),
  },
  messageText: {
    paddingHorizontal: responsiveWidth(4),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: COLORS.BLACK_4,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(8),
    marginTop: responsiveHeight(6),
  },
  codeText: {
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
  },
  copyText: {
    color: COLORS.GOLD,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_16,
  },
  orText: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: 'center',
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(1),
  },
  tapText: {
    marginTop: responsiveHeight(4),
    textAlign: 'center',
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
