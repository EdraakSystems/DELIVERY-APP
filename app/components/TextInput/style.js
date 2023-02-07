import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {responsiveWidth} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  container: fromRegister => ({
    borderWidth: 1,
    borderColor: fromRegister ? COLORS.GOLD : COLORS.LIGHT_GOLD,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: 13,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  titleText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
    color: COLORS.GREY_1,
  },
  textInputStyle: {
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK_1,
    flex: 1,
    paddingVertical: 0,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: 5,
  },
});

export default styles;
