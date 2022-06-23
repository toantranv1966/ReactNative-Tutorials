import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Index';
import Header from './components/Header';
import LikeButton from './components/LikeButton';
import RateButton from './RateButton';
import Eatme from './Homeworks/Eatme/Login/Index';
import GreenSignIn from './Homeworks/Green/Green-SignIn';
import GreenSignup from './Homeworks/Green/Green-Signup';
import Menu from './Homeworks/Menu';
import AlignContentLayout from './Homeworks/Menu/AlignContent1';
import EffectExample from './Sessions03/EffectExample';
import React from 'react';
import NetworkingExample from './Sessions04/NetworkingExample';
import NetworkingWithAxios from './Sessions04/NetworkingWithAxios';
export default function App() {
  const [visiable, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      {/* <Header
        style={{ color: 'red', fontSize: 32 }}
        text="Hello React Native "
        fontSize={24}
        status="waiting"
      /> */}
      {/* <LikeButton /> */}
      {/* <RateButton /> */}
      {/* <Login /> */}
      {/* <Eatme /> */}
      {/* <GreenSignIn /> */}
      {/* <GreenSignup /> */}
      {/* <Menu /> */}
      {/* {visiable && <EffectExample />}
      <Button
        title="Hide component"
        onPress={() => {
          setVisible((v) => false);
        }}
      ></Button> */}
      {/* <NetworkingExample /> */}
      <NetworkingWithAxios />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
