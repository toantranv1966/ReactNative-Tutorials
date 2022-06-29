export default class SectionListExamples extends Component {
  renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => 'person-' + index}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

import { View, Text } from 'react-native';
import React from 'react';
import React, { Component } from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const data = [
  {
    title: 'D',
    data: ['Devin', 'David'],
  },
  {
    title: 'J',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

type Props = {};

const SessionListExample = (props: Props) => {
  return (
    <View>
      <Text>SessionListExample</Text>
    </View>
  );
};

export default SessionListExample;
