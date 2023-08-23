/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import {Home} from './screens/Home';
import Welcome from './screens/Welcome';
import {PaperProvider, useTheme} from 'react-native-paper';
import Header from './components/Header';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={'blue'} />
        {isScrolling && <Header />}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            // setIsScrolling={setIsScrolling}
          />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
