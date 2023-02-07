import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import COMMON_STYLES from '../../themes/Styles';
import {getTimeAgo} from '../../Utils/CommonUtils';
import {NOTIFICATION_STRINGS} from '../../constants/Strings';
import {isPad} from '../../Utils/ScalingUtils';

const NotificationItem = props => {
  const {data} = props;
  return (
    <View style={styles.rowFront}>
      <View style={styles.dot} />
      <View style={styles.titleContainer}>
        <View style={COMMON_STYLES.rowSpaceBetween}>
          <View style={COMMON_STYLES.rowAlignCenter}>
            <SvgXml
              height={isPad ? 40 : 30}
              width={isPad ? 40 : 30}
              xml={SVG.SOLID_CHECK}
            />
            <Text style={styles.titleText}>{data.item.title}</Text>
          </View>
          <Text style={styles.agoText}>
            {getTimeAgo(data.item.date)} {NOTIFICATION_STRINGS.AGO}
          </Text>
        </View>
        <Text style={styles.messageText}>{data.item.message}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;
