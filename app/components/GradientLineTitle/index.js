import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const GradientLineTitle = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.titleText}>{title}</Text> : null}
      <LinearGradient
        colors={[
          'rgba(139, 139, 139, 1)',
          'rgba(139, 139, 139, 0.5)',
          'rgba(139, 139, 139, 0)',
        ]}
        start={{x: 0.0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.4, 0.9]}
        style={styles.linearGradient}
      />
    </View>
  );
};

export default GradientLineTitle;
