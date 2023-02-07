import {StyleSheet} from 'react-native';
import {CARD_WIDTH} from '.';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(3),
  },
  contentContainerStyle: CARDS => ({
    overflow: 'hidden',
    width:
      (CARD_WIDTH + responsiveWidth(3)) * CARDS.length + responsiveWidth(3),
    paddingLeft: responsiveWidth(3),
  }),
  dotContainerStyle: {
    marginRight: responsiveWidth(isPad ? 1 : 1.5),
  },
  containerStyle: {
    paddingHorizontal: 0,
    paddingVertical: responsiveHeight(2),
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
    marginRight: responsiveWidth(isPad ? 1 : 1.5),
  },
  priceView: {
    backgroundColor: COLORS.GOLD,
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveWidth(2),
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  amountText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZES.FONT_20,
    color: COLORS.BLACK,
    paddingLeft: 5,
  },
  optionContainer: {
    paddingTop: responsiveHeight(4),
  },
});

export default styles;
