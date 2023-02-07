import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  isPad,
} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MODAL_BACK,
    justifyContent: 'center',
  },
  childContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: responsiveHeight(4),
    borderRadius: 15,
    marginHorizontal: responsiveWidth(4),
  },
  inputWrapperStyle: {
    marginVertical: responsiveHeight(3),
  },
  inputStyle: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
  },
  titleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZES.FONT_24,
    color: COLORS.BLACK,
    marginBottom: 10,
    textAlign: 'center',
  },
  messageText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  imageStyle: {
    height: responsiveHeight(isPad ? 45 : 40),
    width: responsiveWidth(92),
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
});

export default styles;
