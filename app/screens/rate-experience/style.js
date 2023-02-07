import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';
import COLORS from '../../themes/Colors';

const styles = StyleSheet.create({
  driverImage: {
    height: isPad ? 90 : 54,
    width: isPad ? 90 : 54,
    borderRadius: isPad ? 45 : 27,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(4),
  },
  nameContainer: {
    flex: 1,
    marginLeft: responsiveWidth(2.5),
  },
  nameText: {
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLORS.BLACK,
  },
  subscriptionText: {
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY_3,
    paddingTop: 10,
  },
  rateView: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: isPad ? 35 : 24,
  },
  emojiView: {
    alignItems: 'center',
  },
  rateNameText: {
    marginTop: 8,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_14,
    color: COLORS.GREY,
  },
  selectedView: {
    alignItems: 'center',
    marginTop: responsiveHeight(6),
  },
  selectedRateText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_24,
    color: COLORS.BLACK,
    paddingBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GOLD,
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(6),
    marginHorizontal: responsiveWidth(4),
    borderRadius: 14,
    height: responsiveHeight(13),
    textAlignVertical: 'top',
    paddingHorizontal: responsiveWidth(3.5),
    paddingTop: responsiveWidth(3),
    paddingBottom: responsiveWidth(3),
    color: COLORS.BLACK_1,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
