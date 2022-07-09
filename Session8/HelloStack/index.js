import { View, Text } from 'react-native';
import React from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileStack from './Screens/ProfileStack';

const Stack = createStackNavigator();
const HelloStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'violet',
        },
        headerBackTitle: 'Quay lại',
        headerBackTitleStyle: { color: 'white' },
        headerTitle: () => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather name="user" size={20} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  marginLeft: 12,
                  color: 'white',
                }}
              >
                Đăng nhập
              </Text>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{ name: 'unknow', score: 0 }}
      />

      <Stack.Screen name="Profile" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default HelloStack;
