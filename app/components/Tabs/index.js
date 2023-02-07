import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {TABS_STRINGS} from '../../constants/Strings';
import styles from './style';

const TABS = [
  {
    title: TABS_STRINGS.SUCCESS,
  },
  {
    title: TABS_STRINGS.CANCEL,
  },
  {
    title: TABS_STRINGS.UPCOMING,
  },
];

const Tabs = props => {
  const {activeTabIndex, setTabIndex} = props;

  const renderTab = (t, index) => {
    const isActive = activeTabIndex === index;
    return (
      <TouchableOpacity
        style={styles.tabContainer(isActive)}
        onPress={() => setTabIndex(index)}
        key={index.toString()}>
        <Text style={styles.tabText(isActive)}>{t.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {TABS.map((t, index) => {
        return renderTab(t, index);
      })}
    </View>
  );
};

export default Tabs;
