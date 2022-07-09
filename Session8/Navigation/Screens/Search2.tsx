import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

import { AuthContext } from '../context';

const Search2 = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Search Screen 2</Text>
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
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export default Search2;

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
