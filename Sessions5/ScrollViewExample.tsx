import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

// Chỉ sử dụng cho dữ liệu vược quá màn hình không dùng cho load dữ liệu lớn

export default class ScrollViewExamples extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge} />
        <ScrollView horizontal pagingEnabled={true}>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 400,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});
