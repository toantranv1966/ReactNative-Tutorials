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

const GreenSignIn = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerBranch}>
          <TouchableOpacity style={styles.headerTop}></TouchableOpacity>
          <View style={styles.headerLogo}>
            <MaterialCommunityIcons
              name="home-outline"
              size={38}
              color="#27AE60"
            />
          </View>
        </View>
      </View>

      {/* BODY */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContentText}>
          <Text style={styles.subBodyContentText}>Let's Sign You In</Text>
          <Text style={styles.subBodyContentText2}>
            Welcome back, you've been missed
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="off"
            keyboardAppearance="dark"
            returnKeyLabel="done"
            returnKeyType="done"
            placeholder="Email Address"
            placeholderTextColor={'#111A2C'}
            onChangeText={(newText) => {
              setEmail(newText);
            }}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={'#111A2C'}
            onChangeText={(newText) => {
              setPassword(newText);
            }}
          />
        </View>

        <View style={styles.bodyButton}>
          <TouchableOpacity style={styles.signButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={{ color: '#5287f3', marginTop: 20 }}>
            Forgot password?
          </Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.bodyText}>
          Don't have an account? <Text style={styles.subBodyText}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default GreenSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //   Header

  headerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },

  headerBranch: {
    position: 'relative',
  },

  headerTop: {
    position: 'absolute',
    left: 0,
    top: -50,
    backgroundColor: '#27AE60',
    height: 54,
    width: 120,
    borderRadius: 8,
    transform: [{ rotateX: '0deg' }, { rotateZ: '-50deg' }],
    marginVertical: 8,
    marginHorizontal: 80,
  },

  headerLogo: {
    position: 'absolute',
    left: 0,
    top: 40,
    backgroundColor: '#dcede6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginVertical: 8,
    marginHorizontal: 32,
  },

  headerText: {
    color: '#FF6C44',
    fontSize: 30,
    fontWeight: '700',
  },

  headerBranchText: {
    color: '#FF6C44',
    fontSize: 30,
    fontWeight: '700',
  },

  headerContentText: {
    marginTop: 16,
  },

  //   optionInputContainer:{
  //     flex:1,
  //   }

  optionInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
  },

  //   End header

  bodyContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
  },

  bodyContentText: {},

  subBodyContentText: {
    color: '#111A2C',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 2,
    marginVertical: 8,
    marginHorizontal: 32,
  },

  subBodyContentText2: {
    color: '#898B9A',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 32,
    marginBottom: 40,
  },

  bodyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  bodyText: {
    color: '#525C67',
  },

  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderColor: '#f4f5f9',
    borderWidth: 1,
    backgroundColor: '#F5F5F8',
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  textInput: {
    height: 54,
    flex: 1,
    fontSize: 16,
  },

  signButton: {
    height: 54,
    width: 350,
    backgroundColor: '#27AE60',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },

  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subBodyText: {
    color: '#5287f3',
    fontSize: 16,
    fontWeight: '700',
  },
});
