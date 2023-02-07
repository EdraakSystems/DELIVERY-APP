import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  container: isSelect => ({
    backgroundColor: isSelect ? COLORS.ORANGE : COLORS.GOLD_7,
    marginRight: responsiveWidth(2),
    borderRadius: 10,
    padding: 15,
  }),
  rowStyle: {
    flexDirection: 'row',
  },
  marginLeft: {
    marginLeft: 12,
  },
  vehicleText: {
    textAlign: 'center',
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLORS.BLACK,
    marginTop: responsiveHeight(2),
  },
  priceText: {
    textAlign: 'center',
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLORS.BLACK,
    marginTop: 5,
  },
});

export default styles;
