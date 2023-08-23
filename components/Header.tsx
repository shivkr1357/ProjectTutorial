import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Appbar, Text} from 'react-native-paper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Header = () => {
  return (
    <Appbar.Header style={styles.header} statusBarHeight={12}>
      <Appbar.Content color="white" title="ItsIndianGuy" />
      <Appbar.Action icon="magnify" iconColor="white" />
      <Appbar.Action icon={'dots-vertical'} iconColor="white" />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4682b4',
  },
});
