import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';
import COLORS from '../../themes/Colors';
import {responsiveWidth, isPad} from '../../Utils/ScalingUtils';

const styles = StyleSheet.create({
  buttonStyle: disabled => ({
    backgroundColor: disabled ? COLORS.GREY_4 : COLORS.BLACK_2,
    height: isPad ? 80 : 64,
    marginHorizontal: responsiveWidth(4),
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...(disabled
      ? {
          shadowColor: COLORS.PURE_BLACK,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,

          elevation: 5,
        }
      : {}),
  }),
  buttonText: isBold => ({
    color: COLORS.WHITE,
    fontFamily: isBold ? FONT_FAMILY.SEMI_BOLD : FONT_FAMILY.REGULAR,
    fontSize: isBold ? FONT_SIZES.FONT_18 : FONT_SIZES.FONT_16,
  }),
  iconStyle: {
    marginRight: 14,
  },
});

export default styles;
