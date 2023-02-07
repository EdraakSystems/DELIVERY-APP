import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  accountParent: {
    paddingTop: responsiveHeight(3),
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(6),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(3),
  },
  userNameText: {
    color: COLORS.BLACK_3,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_16,
    paddingLeft: 16,
  },
  subscriptionText: {
    color: COLORS.GREY_3,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_12,
    paddingLeft: 16,
  },
  optionParent: {
    paddingVertical: responsiveHeight(1),
  },
  logoutWrapper: {
    marginTop: responsiveHeight(1),
  },
});

export default styles;
