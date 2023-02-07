import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './style';
import {SVG} from '../../constants/Svg';
import moment from 'moment';
import COMMON_STYLES from '../../themes/Styles';
import {isPad} from '../../Utils/ScalingUtils';

const RideHistoryItem = props => {
  const {item, isSuccess, isCancel} = props;
  return (
    <View style={styles.container}>
      <View style={COMMON_STYLES.flex}>
        <View style={styles.titleContainer}>
          <SvgXml
            width={isPad ? 73 : 48}
            height={isPad ? 75 : 50}
            xml={SVG.CALENDAR}
          />
          <View>
            <Text style={styles.dateText}>
              {moment(item.date).format('DD MMMM, hh:mm A')}
            </Text>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
              {isSuccess || isCancel ? (
                <SvgXml
                  height={isPad ? 30 : 20}
                  width={isPad ? 30 : 20}
                  xml={isSuccess ? SVG.CHECK : SVG.CROSS}
                  style={styles.smallIcon}
                />
              ) : null}
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={[styles.addressContainer, styles.marginBottom]}>
          <View style={styles.iconStyle}>
            <SvgXml
              width={isPad ? 40 : 30}
              height={isPad ? 40 : 30}
              xml={SVG.LOCATION_TRACKER}
            />
          </View>
          <Text style={styles.addressText}>{item.pickAddress}</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.iconStyle}>
            <SvgXml
              width={isPad ? 30 : 23}
              height={isPad ? 31 : 24}
              xml={SVG.HOME}
            />
          </View>
          <Text style={styles.addressText}>{item.dropAddress}</Text>
        </View>
      </View>
      <SvgXml
        width={isPad ? 160 : 107}
        height={'100%'}
        xml={SVG.MAP}
        preserveAspectRatio="xMinYMin slice"
      />
    </View>
  );
};

export default RideHistoryItem;
