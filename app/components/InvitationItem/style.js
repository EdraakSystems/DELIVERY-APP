import {StyleSheet} from 'react-native';
import {responsiveWidth, isPad} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_SIZES from '../../constants/FontSizes';
import FONT_FAMILY from '../../constants/FontFamily';

const styles = StyleSheet.create({
  userImage: {
    height: isPad ? 80 : 48,
    width: isPad ? 80 : 48,
    borderRadius: isPad ? 40 : 24,
  },
  container: {
    marginHorizontal: responsiveWidth(4),
    marginTop: responsiveWidth(4),
    marginBottom: responsiveWidth(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nameText: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZES.FONT_18,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    paddingLeft: 12,
  },
  inviteText: {
    color: COLORS.GREY_4,
    fontSize: FONT_SIZES.FONT_12,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingLeft: 12,
    paddingTop: 8,
  },
  dateText: {
    color: COLORS.BLACK_4,
  },
  buttonStyle: isJoined => ({
    backgroundColor: isJoined ? COLORS.GOLD : COLORS.WHITE,
    width: isPad ? 170 : 105,
    borderWidth: isJoined ? 0 : 1,
    borderColor: COLORS.GOLD_6,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  }),
  buttonText: isJoined => ({
    color: isJoined ? COLORS.WHITE : COLORS.GOLD,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_16,
  }),
});

export default styles;
