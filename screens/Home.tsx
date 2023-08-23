import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HomeCard from '../components/Cards/HomeCard';

export const Home = () => {
  return (
    <ScrollView style={styles.scrollView} scrollEventThrottle={16}>
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
