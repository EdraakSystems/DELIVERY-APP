import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {responsiveHeight, isPad} from '../../Utils/ScalingUtils';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MODAL_BACK,
    justifyContent: 'flex-end',
  },
  childContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: responsiveHeight(4),
    borderTopLeftRadius: isPad ? 15 : 10,
    borderTopRightRadius: isPad ? 15 : 10,
  },
  inputWrapperStyle: {
    marginVertical: responsiveHeight(3),
  },
  inputStyle: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
  },
});

export default styles;
