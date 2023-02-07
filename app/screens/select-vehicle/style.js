import {StyleSheet} from 'react-native';
import {
  isIphoneXorAbove,
  responsiveHeight,
  responsiveWidth,
  isPad,
} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  detailsView: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: responsiveHeight(2),
    paddingBottom: isIphoneXorAbove() ? 0 : responsiveHeight(2),
    borderTopLeftRadius: isPad ? 15 : 10,
    borderTopRightRadius: isPad ? 15 : 10,
  },
  iconStyle: {
    alignSelf: 'center',
    marginBottom: responsiveHeight(isPad ? 2 : 3),
  },
  truckText: {
    color: COLORS.PURE_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_12,
    marginHorizontal: responsiveWidth(4),
    marginBottom: responsiveWidth(isPad ? 3 : 4),
  },
  flatListContainer: {
    marginHorizontal: responsiveWidth(4),
  },
  promoContainer: isApplied => ({
    marginHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: isApplied ? 'flex-start' : 'center',
    justifyContent: 'space-between',
    marginTop: responsiveWidth(isPad ? 2 : 4),
    marginBottom: responsiveWidth(isPad ? 3 : 6),
  }),
  cashText: {
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.PURE_BLACK,
  },
  priceText: {
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLORS.BLACK_1,
  },
  cashIcon: {
    marginLeft: 11,
  },
  promoText: isApplied => ({
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.REGULAR,
    color: isApplied ? COLORS.GREY_4 : COLORS.BLACK_1,
  }),
  promoView: isApplied => ({
    backgroundColor: isApplied ? COLORS.GREY_7 : COLORS.TRANSPARENT,
    paddingTop: isApplied ? responsiveHeight(1) : 0,
    paddingBottom: isApplied ? responsiveHeight(1.8) : 0,
    paddingRight: isApplied ? responsiveWidth(2.5) : 0,
    paddingLeft: isApplied ? responsiveWidth(3.5) : 0,
    borderRadius: isApplied ? 14 : 0,
  }),
  codeText: {
    color: COLORS.GOLD,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_18,
    paddingTop: 5,
  },
});

export default styles;
