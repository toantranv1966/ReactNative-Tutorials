import { View, Text } from 'react-native';
import React from 'react';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import Notification from './Screens/Notification';
import Search from './Screens/Search';
import Favourite from './Screens/Favourite';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function HelloTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#222f3e',
        tabBarActiveTintColor: '#ff9f43',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ size, color, focused }) => {
            let iconName = 'home-outline';
            if (focused) {
              iconName = 'home';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}
