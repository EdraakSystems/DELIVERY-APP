import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';
import COLORS from '../../themes/Colors';
import {responsiveWidth, responsiveHeight} from '../../Utils/ScalingUtils';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_32,
    color: COLORS.BLACK,
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(2),
  },
  messageText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_18,
    lineHeight: FONT_SIZES.FONT_30,
    color: COLORS.BLACK,
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(2),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: responsiveHeight(1),
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  buttonText: {
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.BLACK_1,
    textDecorationLine: 'underline',
  },
});

export default styles;
