import {StyleSheet, Platform} from 'react-native';
import {
  getResponsiveFontSize,
  responsiveWidth,
} from './../../Utils/ScalingUtils';
import FONT_FAMILY from '../../constants/FontFamily';

export default StyleSheet.create({
  accessory: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    width: 8,
    height: 8,
    transform: [
      {
        translateY: -4,
      },
      {
        rotate: '45deg',
      },
    ],
  },
  triangleContainer: {
    width: 12,
    height: 6,
    overflow: 'hidden',
    alignItems: 'center',

    backgroundColor: 'transparent' /* XXX: Required */,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  picker: {
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    borderRadius: 2,
    position: 'absolute',
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 1.0)',
        shadowOpacity: 0.54,
        shadowOffset: {width: 0, height: 2},
      },

      android: {
        borderWidth: 1,
        // borderColor: colors.BORDER,
        // elevation: 5,
      },
    }),
  },
  item: {
    textAlign: 'left',
    fontFamily: FONT_FAMILY.REGULAR,
  },
  scroll: {
    flex: 1,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  scrollContainer: {
    // backgroundColor: colors.DROPDOWN_BACK,
  },
  selectView: {
    borderBottomWidth: 1,
    // borderBottomColor: colors.DROPDOWN_BORDER,
    padding: responsiveWidth(4),
    // backgroundColor: colors.DROPDOWN_BACK,
    justifyContent: 'center',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  selectText: {
    fontSize: getResponsiveFontSize(14),
    fontFamily: FONT_FAMILY.REGULAR,
    includeFontPadding: false,
    // color: colors.TEXTINPUT_FONT,
  },
});
