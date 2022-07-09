import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Index';
import Header from './components/Header';
import LikeButton from './components/LikeButton';
import RateButton from './RateButton';
import Eatme from './Homeworks/Session04/Login/Index';
import GreenSignIn from './Homeworks/Green/Green-SignIn';
import GreenSignup from './Homeworks/Green/Green-Signup';
// import Menu from './Homeworks/Menu';
import Menu from './Homeworks/Session04/Menu/menu';
import AlignContentLayout from './Homeworks/Session04/Menu/AlignContent1';
import EffectExample from './Sessions03/EffectExample';
import React from 'react';
import NetworkingExample from './Sessions04/NetworkingExample';
import NetworkingWithAxios from './Sessions04/NetworkingWithAxios';
import FlatListExample from './Sessions5/FlatListExample';
import ScrollViewExamples from './Sessions5/ScrollViewExample';
import ScrollViewWithManyDataExample from './Sessions5/ScrollViewWithManyData';
import MenuEdit from './Homeworks/Session04/Menu/MenuEdit';
import SessionListExample from './Sessions5/SessionListExample';
import SectionListAdvancedExamples from './Sessions5/SectionListAdvancedExamples ';
import BasicFlexBox from './Sessions04/BasicFlexBox';
import ImageExample from './Sessions04/ImageExample';
import SvgExample from './Sessions04/SvgExample';
import SignInScreen from './Homeworks/Session06/SignInScreen';
import HomeScreen from './Homeworks/Session06/HomeScreen';
import AppNavigator from './Session8/AppNavigator';
import NavigationHomework from './Session8/Navigation/index';
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
      {/* Session3 */}
      {/* <LikeButton /> */}
      {/* <RateButton /> */}
      {/* Session4 */}
      {/* <Login /> */}
      {/* <Eatme /> */}
      {/* <GreenSignIn /> */}
      {/* <GreenSignup /> */}
      {/* <Menu /> */}
      {/* <MenuEdit /> */}
      {/* {visiable && <EffectExample />}
      <Button
        title="Hide component"
        onPress={() => {
          setVisible((v) => false);
        }}
      ></Button> */}
      {/* <NetworkingExample /> */}
      {/* <NetworkingWithAxios /> */}
      {/* Session5 */}
      {/* <FlatListExample /> */}
      {/* <ScrollViewExamples /> */}
      {/* <ScrollViewWithManyDataExample /> */}
      {/* <SessionListExample /> */}
      {/* <SectionListAdvancedExamples /> */}
      {/* <BasicFlexBox /> */}
      {/* <ImageExample /> */}
      {/* <SvgExample /> */}
      {/* <SignInScreen /> */}
      {/* <HomeScreen /> */}
      <AppNavigator />
      {/* <NavigationHomework /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
