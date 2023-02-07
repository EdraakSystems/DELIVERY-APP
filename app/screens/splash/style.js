import {StyleSheet} from 'react-native';
import COLORS from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GOLD,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 172,
    height: 233,
    resizeMode: 'contain',
  },
});

export default styles;
