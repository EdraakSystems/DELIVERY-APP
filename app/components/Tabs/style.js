import {StyleSheet} from 'react-native';
import {responsiveWidth, isPad} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
  },
  tabContainer: isActive => ({
    backgroundColor: isActive ? COLORS.GREEN : COLORS.TRANSPARENT,
    paddingHorizontal: isPad ? 20 : 10,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  tabText: isActive => ({
    color: isActive ? COLORS.WHITE : COLORS.BLACK_4,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
  }),
});

export default styles;
