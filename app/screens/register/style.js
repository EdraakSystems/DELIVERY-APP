import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../themes/Colors';
import {responsiveHeight, responsiveWidth} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    backgroundColor: COLORS.GREY_2,
    marginVertical: responsiveHeight(3),
  },
  emailTextInput: {
    backgroundColor: COLORS.GREY_2,
  },
  margin: {
    marginLeft: 0,
  },
  marginTop: {
    marginTop: responsiveHeight(6),
  },
  dropdownBase: {
    borderWidth: 1,
    borderColor: COLORS.GOLD,
    backgroundColor: COLORS.GREY_2,
    marginHorizontal: responsiveWidth(4),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(6),
    paddingVertical: 13,
    borderRadius: 14,
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownTitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
    color: COLORS.GREY_1,
  },
  dropdownText: {
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK_1,
  },
  promoText: {
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK_1,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(4),
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  otpText: {
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    paddingHorizontal: responsiveWidth(2),
    textAlign: 'center',
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(Platform.OS === 'android' ? 2 : 0),
  },
  changeText: {
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GOLD,
    paddingRight: responsiveWidth(3),
  },
});

export default styles;
