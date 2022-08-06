import { View, Text, Button } from 'react-native';
import React from 'react';

type Props = {};

const Details2 = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tin tức 2</Text>
      <Button
        title="Go back to List"
        onPress={() => {
          props.navigation.navigate('List');
        }}
      />
    </View>
  );
};

export default Details2;
