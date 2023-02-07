import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import COLORS from '../../themes/Colors';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(1.8),
  },
  titleText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.FONT_16,
    paddingLeft: 10,
  },
  valueText: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
    paddingRight: 9,
  },
});

export default styles;
