import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({ ios: styles.headerIOS, android: styles.HeaderAndroid }),
      }}>
      <TitleText styles={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  HeaderAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  },
});

export default Header;
