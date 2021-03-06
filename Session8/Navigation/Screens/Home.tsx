import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

type Props = {};

const Home = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Master List Screen</Text>
      <Button
        title="React Native by Example"
        onPress={() =>
          navigation.push('Details', { name: 'React Native by Example ' })
        }
      />
      <Button
        title="React Native School"
        onPress={() =>
          navigation.push('Details', { name: 'React Native School' })
        }
      />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
