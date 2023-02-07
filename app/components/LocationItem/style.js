import {StyleSheet} from 'react-native';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  container: {
    paddingLeft: responsiveWidth(4),
    paddingRight: responsiveWidth(5),
    backgroundColor: COLORS.LIGHT_GOLD,
    marginHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(1.5),
    borderRadius: 10,
    paddingVertical: 19,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    paddingHorizontal: 14,
    flex: 1,
  },
  addressText: {
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK,
    paddingLeft: 14,
  },
});

export default styles;
