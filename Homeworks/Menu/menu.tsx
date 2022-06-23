import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {};

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
      <View style={styles.bodyContainer}>
        <View style={styles.Items}>
          <View style={styles.bodyItem}>
            <View style={styles.bodyIcon}>
              <MaterialCommunityIcons
                name="microsoft-windows"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.subHeaderContentText2}>General</Text>
          </View>
          <View style={styles.bodyItem}>
            <View style={styles.bodyIcon}>
              <MaterialCommunityIcons
                name="microsoft-windows"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.subHeaderContentText2}>General</Text>
          </View>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footerContainer}></View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerTop: {
    position: 'absolute',
    marginLeft: -20,
    marginTop: -80,
    backgroundColor: '#ff4081',
    width: '90%',
    height: '150%',
    borderRadius: 8,
    transform: [{ rotateX: '0deg' }, { rotateZ: '-40deg' }],
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    zIndex: 0,
  },

  headerContentText: {
    position: 'absolute',
    top: 60,
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
    marginVertical: 8,
    marginHorizontal: 32,
    marginTop: 20,
  },

  bodyContainer: {
    position: 'relative',
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    zIndex: 0,
  },

  Items: {
    position: 'absolute',
    left: 0,
    top: -80,
    flexDirection: 'row',
    // width: '100%',
  },

  bodyItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525C67',
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },

  bodyIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 15,
  },

  footerContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
