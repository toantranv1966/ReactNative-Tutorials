import { Text, View, Dimensions, Platform } from 'react-native';
import React from 'react';
import styles from './styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const scale = Dimensions.get('window').scale;

type Props = {};

const styleExample = (props: Props) => {
  return (
    <View>
      <Text style={[styles.text, styles.bigText]}>i</Text>
      <View style={{ width: width, height: 100, backgroundColor: 'yellow' }}>
        <Text>{width}</Text>
        <Text>{height}</Text>
        <Text>{scale}</Text>
        <Text>{Platform.OS}</Text>
      </View>
    </View>
  );
};

export default styleExample;
