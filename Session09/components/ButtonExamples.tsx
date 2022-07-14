import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

import { Feather } from '@expo/vector-icons';

type Props = {};

const ButtonExamples = (props: Props) => {
  return (
    <View>
      <Button
        mode="outlined"
        icon="home"
        onPress={() => console.log('Pressed')}
        color="green"
        dark={false}
        uppercase={false}
      >
        Home
      </Button>
      <Button
        icon={(props) => {
          return <Feather color={props.color} name="home" />;
        }}
      >
        HOme
      </Button>
    </View>
  );
};

export default ButtonExamples;
