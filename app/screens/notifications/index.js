import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import BackHeader from '../../components/BackHeader';
import COMMON_STYLES from '../../themes/Styles';
import {NOTIFICATION_STRINGS} from '../../constants/Strings';
import styles from './style';
import moment from 'moment';
import NotificationItem from '../../components/NotificationItem';
import {SvgXml} from 'react-native-svg';
import {SVG} from '../../constants/Svg';
import {isPad} from '../../Utils/ScalingUtils';

const DATA = [
  {
    title: 'System',
    message: 'Your ride #1234 has been successfully arrived.',
    date: moment().subtract(10, 'm'),
  },
  {
    title: 'System',
    message: 'Your ride #1234 has been successfully arrived.',
    date: moment().subtract(2, 'h'),
  },
  {
    title: 'System',
    message: 'Your ride #1234 has been successfully arrived.',
    date: moment().subtract(1, 'd'),
  },
  {
    title: 'System',
    message: 'Your ride #1234 has been successfully arrived.',
    date: moment().subtract(5, 'd'),
  },
  {
    title: 'System',
    message: 'Your ride #1234 has been successfully arrived.',
    date: moment().subtract(1, 'M'),
  },
  {
    title: 'System',
    message: 'Your ride #1234 has been successfully arrived.',
    date: moment().subtract(2, 'M'),
  },
];

class Notifications extends React.PureComponent {
  renderItem = (data, rowMap) => {
    return <NotificationItem data={data} />;
  };

  renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <Text></Text>
        <View style={styles.deleteView}>
          <Text style={styles.deleteText}>Delete</Text>
          <SvgXml
            height={isPad ? 30 : 24}
            width={isPad ? 30 : 24}
            xml={SVG.WHITE_DELETE}
          />
        </View>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.recentText}>{NOTIFICATION_STRINGS.RECENT}</Text>
        <Text style={styles.recentText}>{NOTIFICATION_STRINGS.MARK_READ}</Text>
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={COMMON_STYLES.container}>
        <BackHeader
          navigation={navigation}
          title={NOTIFICATION_STRINGS.NOTIFICATION}
        />
        {this.renderHeader()}
        <SwipeListView
          data={DATA}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={isPad ? -120 : -75}
          disableRightSwipe
          closeOnRowOpen
          closeOnRowBeginSwipe
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Notifications;
