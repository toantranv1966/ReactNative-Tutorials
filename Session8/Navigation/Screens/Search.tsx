import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const Search = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Search Screen</Text>
      <Button title="Search 2" onPress={() => navigation.push('Search2')} />
      <Button
        title="React Native School"
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Details',
            params: { name: 'React Native School' },
          });
        }}
      />
    </ScreenContainer>
  );
};

export default Search;

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
