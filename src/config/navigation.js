// In App.js in a new project

// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import About from '../screens/about';
import Quiz from '../screens/Quiz';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Quiz" component={Quiz} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

