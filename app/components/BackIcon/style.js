import {StyleSheet, Platform} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';

const styles = StyleSheet.create({
  container: isDark => ({
    left: responsiveWidth(4),
    top: responsiveHeight(Platform.OS === 'android' ? 4 : 8),
    position: 'absolute',
    height: isDark
      ? responsiveWidth(isPad ? 7 : 10)
      : responsiveWidth(isPad ? 8 : 12),
    width: isDark
      ? responsiveWidth(isPad ? 7 : 10)
      : responsiveWidth(isPad ? 8 : 12),
    borderRadius: responsiveWidth(12),
    backgroundColor: isDark ? COLORS.BLACK_1 : COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.GOLD_8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }),
});

export default styles;
