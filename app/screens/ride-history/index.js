import React from 'react';
import {SafeAreaView} from 'react-native';
import BackHeader from '../../components/BackHeader';
import {RIDE_STRINGS} from '../../constants/Strings';
import Tabs from '../../components/Tabs';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import RideHistoryItem from '../../components/RideHistoryItem';

const SUCCESS_DATA = [
  {
    date: new Date(),
    time: '28 Min',
    pickAddress: '1901 Thornridge, 81063',
    dropAddress: '8502 Preston Rd,  Maine 98380',
  },
];

const CANCEL_DATA = [
  {
    date: new Date(),
    time: '28 Min',
    pickAddress: '1901 Thornridge, 81063',
    dropAddress: '8502 Preston Rd,  Maine 98380',
  },
];

const UPCOMING_DATA = [
  {
    date: new Date(),
    time: '28 Min',
    pickAddress: '1901 Thornridge, 81063',
    dropAddress: '8502 Preston Rd,  Maine 98380',
  },
];

class RideHistory extends React.PureComponent {
  state = {
    activeTabIndex: 0,
  };

  renderItem = ({item}) => {
    const {activeTabIndex} = this.state;
    return (
      <RideHistoryItem
        item={item}
        isSuccess={activeTabIndex === 0}
        isCancel={activeTabIndex === 1}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    const {activeTabIndex} = this.state;
    const data =
      activeTabIndex === 0
        ? SUCCESS_DATA
        : activeTabIndex === 1
        ? CANCEL_DATA
        : UPCOMING_DATA;
    return (
      <SafeAreaView style={styles.container}>
        <BackHeader navigation={navigation} title={RIDE_STRINGS.RIDE_HISTORY} />
        <Tabs
          activeTabIndex={activeTabIndex}
          setTabIndex={index => this.setState({activeTabIndex: index})}
        />
        <FlatList
          data={data}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </SafeAreaView>
    );
  }
}

export default RideHistory;
