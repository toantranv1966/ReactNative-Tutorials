import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Counter from './components/Counter';

type Props = {};

const ComponentToComponent = (props: Props) => {
  const [name, setName] = useState('React Native');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* parent to child */}
      <Counter
        fontSize={30}
        onPress={(value) => {
          setName('Redux' + value);
        }}
      />

      {/*child to parent  */}
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

export default ComponentToComponent;
