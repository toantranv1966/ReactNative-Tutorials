import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const i = (props: Props) => {
  return (
    <View>
      <Text style={styles.text}>i</Text>
    </View>
  );
};

export default i;

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
  },
});
