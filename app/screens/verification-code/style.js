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
    paddingLeft: responsiveWidth(4),
    marginTop: responsiveHeight(6),
  },
  messageText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_20,
    lineHeight: FONT_SIZES.FONT_30,
    color: COLORS.GREY,
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  textInput: {
    marginVertical: responsiveHeight(3),
  },
});

export default styles;
