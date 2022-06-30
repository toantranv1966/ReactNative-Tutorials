import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const data = [
  {
    title: 'Phòng nhân sự',
    data: ['Devin', 'David'],
  },
  {
    title: 'Phòng kinh doanh',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

const Item = ({ item, index }) => {
  return (
    <View>
      <Text style={styles.item}>{item}</Text>
    </View>
  );
};

const renderSectionHeader = ({ section }) => {
  return <Text style={styles.sectionHeader}>{section.title}</Text>;
};

type Props = {};

const SessionListExample = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={Item}
        // renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={renderSectionHeader}
        // renderSectionHeader={({ section: { title } }) => (
        //   <Text style={styles.header}>{title}</Text>
        // )}
      />
    </SafeAreaView>
  );
};

export default SessionListExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    padding: 16,
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//   },
// });
