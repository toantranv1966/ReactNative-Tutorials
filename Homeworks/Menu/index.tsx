import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  Button,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

type Props = {};

const data: { id: number; name: string }[] = [
  {
    id: 0,
    name: 'General',
    color: 'deepskyblue',
    iconname: 'microsoft-windows',
    backcolor: 'deepskyblue',
    size: 24,
  },
  {
    id: 1,
    name: 'Transport',
    color: 'mediumslateblue',
    iconname: 'truck',
    backcolor: 'mediumslateblue',
    size: 24,
  },
  {
    id: 2,
    name: 'Shopping',
    color: '#ff4081',
    iconname: 'shopping',
    backcolor: '#ff4081',
    size: 24,
  },
  {
    id: 3,
    name: 'Bills',
    color: 'orange',
    iconname: 'microsoft-windows',
    backcolor: 'orange',
    size: 24,
  },
  {
    id: 4,
    name: 'Entertainment',
    color: '#5172e9',
    iconname: 'youtube',
    backcolor: '#5172e9',
    size: 24,
  },
  {
    id: 5,
    name: 'Grocery',
    color: 'mediumseagreen',
    iconname: 'shopping',
    backcolor: 'mediumseagreen',
    size: 24,
  },
];

const Menu = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.headerContainer}>
        <View style={styles.headerTop}></View>
        <View style={styles.headerContentText}>
          <Text style={styles.subHeaderContentText}>Classify transaction</Text>
          <Text style={styles.subHeaderContentText2}>
            Classify this transaction into a
          </Text>
          <Text style={styles.subHeaderContentText2}>particular category</Text>
        </View>
      </View>

      {/* BODY */}
      <TouchableOpacity style={styles.bodyContainer}>
        {console.log(data)}
        {data.map((value, index) => (
          <View key={index} style={[styles.box]}>
            <View style={[styles.boxIcon]} backgroundColor={value.backcolor}>
              <MaterialCommunityIcons
                name={value.iconname}
                size={value.size}
                color="#FFFFFF"
              />
            </View>
            <Text style={[styles.boxContent]}>{value.name}</Text>
          </View>
        ))}
      </TouchableOpacity>

      {/* FOOTER */}
      <View style={styles.footerContainer}>
        <View style={styles.footerIconContainer}>
          <MaterialCommunityIcons name="cart" size={24} color="#ff4081" />
          <Foundation name="graph-bar" size={24} color="#FFFFFF" />
          <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333334',
    flex: 1,
  },

  headerContainer: {
    position: 'relative',
    flex: 1,
  },

  headerTop: {
    position: 'absolute',
    marginLeft: -30,
    marginTop: -110,
    backgroundColor: '#ff4081',
    width: '90%',
    height: '200%',
    borderRadius: 8,
    transform: [{ rotateX: '0deg' }, { rotateZ: '-40deg' }],
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  headerContentText: {
    position: 'absolute',
    top: 30,
    left: 0,
  },

  subHeaderContentText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    // lineHeight: 32,
    marginBottom: 2,
    marginVertical: 8,
    marginHorizontal: 32,
  },

  subHeaderContentText2: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 14,
    // marginVertical: 8,
    marginHorizontal: 32,
    marginTop: 20,
  },

  bodyContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 4,
    marginHorizontal: 4,
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525C67',
    width: '30%',
    height: '30%',
    borderRadius: 20,
    margin: 15,
  },

  boxIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginBottom: 15,
  },

  boxContent: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14,
    // marginVertical: 8,
  },

  footerContainer: {
    height: 40,
    backgroundColor: '#525C67',
  },

  footerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
    paddingVertical: 5,
  },
});
