import {StyleSheet} from 'react-native';
import {
  getResponsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import COLORS from '../../themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(3),
  },
  textInput: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    margin: 5,
    textAlign: 'center',
    fontWeight: '500',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GOLD,
    fontSize: getResponsiveFontSize(16),
    fontFamily: FONT_FAMILY.REGULAR,
    backgroundColor: COLORS.WHITE,
  },
});
