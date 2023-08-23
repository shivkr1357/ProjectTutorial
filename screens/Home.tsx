import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import HomeCard from '../components/Cards/HomeCard';

export const Home = ({navigation, theme, isScrolling, setIsScrolling}: any) => {
  return (
    <ScrollView
      style={styles.scrollView}
      // onScroll={handleScroll}
      scrollEventThrottle={16}>
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    overflow: 'scroll',
  },
});
