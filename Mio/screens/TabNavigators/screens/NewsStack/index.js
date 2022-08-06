import { View, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import List from './screens/List';
import Details from './screens/Details';
import Details2 from './screens/Details 2';

const Stack = createStackNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Details2" component={Details2} />
    </Stack.Navigator>
  );
};

export default NewsStack;
