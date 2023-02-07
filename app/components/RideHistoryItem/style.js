import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    padding: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dateText: {
    color: COLORS.GREY,
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingLeft: responsiveWidth(3),
  },
  timeText: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.FONT_20,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    paddingLeft: responsiveWidth(3),
  },
  horizontalLine: {
    height: 1,
    backgroundColor: COLORS.GREY_5,
    marginVertical: responsiveHeight(1.5),
    marginRight: responsiveWidth(3),
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: responsiveWidth(3),
  },
  iconStyle: {
    width: isPad ? 50 : 40,
  },
  addressText: {
    color: COLORS.GREY,
    fontSize: FONT_SIZES.FONT_14,
    fontFamily: FONT_FAMILY.REGULAR,
    flex: 1,
  },
  marginBottom: {
    marginBottom: responsiveHeight(1),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveHeight(isPad ? 0.2 : 1),
  },
  smallIcon: {
    marginLeft: 5,
  },
});

export default styles;
