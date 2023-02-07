import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  rowFront: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    marginHorizontal: responsiveWidth(5),
    borderRadius: 6,
    flex: 1,
    marginVertical: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
  },
  dot: {
    height: isPad ? 15 : 10,
    width: isPad ? 15 : 10,
    borderRadius: isPad ? 15 : 5,
    backgroundColor: COLORS.GOLD_6,
  },
  titleText: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    marginLeft: 10,
  },
  titleContainer: {
    marginLeft: 10,
    flex: 1,
  },
  messageText: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingTop: 12,
  },
  agoText: {
    color: COLORS.GREY_6,
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
