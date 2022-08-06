import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

type Props = {
  fontSize: number;
  onPress: (value: any) => void;
};

const Counter = ({ fontSize, onPress }: Props) => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: fontSize }}>{count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCount((c) => c + 1);
        }}
      />

      <Button
        title="Change name"
        onPress={() => {
          if (onPress && typeof onPress === 'function') {
            onPress(count);
          }
        }}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
