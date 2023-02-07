import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import BackHeader from '../../components/BackHeader';
import COMMON_STYLES from '../../themes/Styles';
import styles from './style';
import {INVITATION_STRINGS} from '../../constants/Strings';
import InvitationItem from '../../components/InvitationItem/index';

const DATA = [
  {
    image: 'https://picsum.photos/200',
    name: 'Rakhi Kumari',
    date: new Date(),
    inProcess: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Manipal',
    date: new Date(),
    isJoined: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Vishakha',
    date: new Date(),
    inProcess: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Arun Kumar',
    date: new Date(),
    isJoined: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Devyani',
    date: new Date(),
    isJoined: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Rakesh Kumar',
    date: new Date(),
    inProcess: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Akhilesh',
    date: new Date(),
    isJoined: true,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Parveen',
    date: new Date(),
    inProcess: true,
  },
];

class Invitations extends React.PureComponent {
  renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.joinText}>10{INVITATION_STRINGS.FRIEND_JOIN}</Text>
        <Text style={styles.earnText}>{INVITATION_STRINGS.EARNED}200.00</Text>
      </View>
    );
  };

  renderItem = ({item}) => {
    return <InvitationItem item={item} />;
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={COMMON_STYLES.container}>
        <BackHeader
          navigation={navigation}
          title={INVITATION_STRINGS.INVITATION}
        />
        {this.renderHeader()}
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.horizontalLine} />}
        />
      </SafeAreaView>
    );
  }
}

export default Invitations;
