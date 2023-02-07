import {StyleSheet} from 'react-native';
import {
  isIphoneXorAbove,
  responsiveHeight,
  responsiveWidth,
  isPad,
} from '../../Utils/ScalingUtils';
import COLORS from '../../themes/Colors';
import FONT_FAMILY from '../../constants/FontFamily';
import FONT_SIZES from '../../constants/FontSizes';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  detailsView: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: responsiveHeight(4),
    paddingBottom: isIphoneXorAbove() ? 0 : responsiveHeight(4),
    borderTopLeftRadius: isPad ? 15 : 10,
    borderTopRightRadius: isPad ? 15 : 10,
  },
  waitingView: {
    margin: responsiveWidth(4),
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 15,
    paddingVertical: responsiveWidth(4),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(7),
    flex: 1,
    marginBottom: responsiveHeight(2),
  },
  userImage: {
    height: responsiveWidth(isPad ? 8 : 12),
    width: responsiveWidth(isPad ? 8 : 12),
    borderRadius: responsiveWidth(12),
  },
  messageIcon: {
    marginLeft: responsiveWidth(3),
  },
  driverNameText: {
    color: COLORS.BLACK_3,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_18,
    marginBottom: 4,
  },
  rateText: {
    color: COLORS.BLACK_3,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_12,
    marginLeft: 8,
  },
  marginLeft: {
    marginLeft: responsiveWidth(2.3),
  },
  codeText: {
    color: COLORS.BLACK_3,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_18,
    textAlign: 'center',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: COLORS.GREY,
    marginHorizontal: responsiveWidth(7),
    marginVertical: responsiveHeight(2),
  },
  truckDetailView: isCenter => ({
    marginHorizontal: responsiveWidth(7),
    flexDirection: 'row',
    flex: 1,
    marginBottom: responsiveHeight(3),
    alignItems: isCenter ? 'center' : 'flex-start',
  }),
  detailChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(isPad ? 6 : 3),
  },
  detailTitle: {
    color: COLORS.GREY_4,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_14,
    paddingBottom: 10,
  },
  valueText: (isSmall, isCompleted) => ({
    color: isCompleted ? COLORS.GREEN_1 : COLORS.BLACK_1,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: isSmall ? FONT_SIZES.FONT_12 : FONT_SIZES.FONT_14,
  }),
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  timeText: {
    color: COLORS.PURE_BLACK,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZES.FONT_18,
    paddingLeft: 7,
  },
  loadingMessageText: {
    color: COLORS.PURE_BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZES.FONT_10,
    textAlign: 'center',
    paddingTop: 5,
  },
});

export default styles;
