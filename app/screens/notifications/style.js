import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';
import {
  responsiveWidth,
  responsiveHeight,
  isPad,
} from '../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginHorizontal: responsiveWidth(5),
    borderRadius: 6,
    marginVertical: responsiveHeight(1.5),
  },
  deleteView: {
    backgroundColor: 'red',
    borderRadius: isPad ? 10 : 6,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },
  deleteText: {
    color: COLORS.GREY_2,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
    paddingBottom: responsiveHeight(1),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
  },
  recentText: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_16,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
