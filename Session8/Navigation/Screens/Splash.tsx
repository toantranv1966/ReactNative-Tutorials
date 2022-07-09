import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const Splash = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Loading...</Text>
    </ScreenContainer>
  );
};

export default Splash;

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
