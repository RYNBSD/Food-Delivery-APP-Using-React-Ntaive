import React from 'react';
import { Text } from 'react-native';

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!loaded) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Details'
          component={Details}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}