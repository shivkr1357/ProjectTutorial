import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

const Welcome = ({navigation}: any) => {
  return (
    <View>
      <Text>Welcome</Text>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}>
        Goto Home page
      </Button>
    </View>
  );
};

export default Welcome;
