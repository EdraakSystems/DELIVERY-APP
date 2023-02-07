import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {responsiveHeight, isPad} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  profileView: {
    alignItems: 'center',
    paddingTop: responsiveHeight(3),
  },
  outerCircle1: {
    height: isPad ? 120 : 88,
    width: isPad ? 120 : 88,
    borderRadius: isPad ? 60 : 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GOLD_2,
    borderWidth: 0.5,
    borderColor: COLORS.GOLD_3,
  },
  outerCircle2: {
    height: isPad ? 148 : 106,
    width: isPad ? 148 : 106,
    borderRadius: isPad ? 130 : 53,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GOLD_4,
    borderWidth: 0.5,
    borderColor: COLORS.GOLD_5,
  },
  userNameText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.FONT_16,
    paddingTop: 5,
  },
  subscriptionText: {
    color: COLORS.GREY_3,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_14,
    paddingTop: 10,
  },
  planView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveHeight(2.5),
    paddingBottom: responsiveHeight(5),
  },
});

export default styles;
