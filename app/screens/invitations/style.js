import {StyleSheet} from 'react-native';
import {responsiveWidth} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    marginBottom: responsiveWidth(2),
  },
  joinText: {
    color: COLORS.GREY,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  earnText: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: COLORS.GREY_5,
    marginHorizontal: responsiveWidth(4),
  },
});

export default styles;
