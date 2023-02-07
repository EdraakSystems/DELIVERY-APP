import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  rowStyle: {
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    paddingLeft: 10,
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  locationText: {
    color: COLORS.PURE_BLACK,
    fontSize: FONT_SIZES.FONT_12,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(2.5),
    marginBottom: responsiveHeight(2),
  },
  inputWrapperStyle: {
    marginBottom: responsiveHeight(2),
  },
  inputStyle: {
    fontSize: FONT_SIZES.FONT_14,
    paddingHorizontal: 8,
  },
});

export default styles;
