import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import COLORS from '../../themes/Colors';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
  },
  titleText: {
    paddingLeft: responsiveWidth(2.5),
    fontSize: FONT_SIZES.FONT_20,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
  },
  emptyView: {
    width: 14,
  },
});

export default styles;
