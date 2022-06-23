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

const GreenSignup = (props: Props) => {
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
              size={42}
              color="#27AE60"
            />
          </View>
        </View>
        <View style={styles.headerContentText}>
          <Text style={styles.subBodyContentText}>Let's log you in</Text>
          <Text style={styles.subBodyContentText2}>
            Welcome back, you've been missed!
          </Text>
        </View>
      </View>

      {/* BODY */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTopButton}>
          <TouchableOpacity style={styles.FooterGoogleButton}>
            <Ionicons name="logo-google" size={24} color="white" />
            <Text
              style={styles.buttonText}
              onPress={() => {
                console.log('Email', email);
                console.log('Password', password);
              }}
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FooterFacebookButton}>
            <Ionicons name="logo-facebook" size={24} color="#FFFFFF" />
            <Text
              style={styles.buttonText}
              onPress={() => {
                console.log('Email', email);
                console.log('Password', password);
              }}
            >
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            autoCapitalize="none"
            autoComplete="off"
            keyboardAppearance="dark"
            returnKeyLabel="done"
            returnKeyType="done"
            placeholder="Username"
            placeholderTextColor={'#111A2C'}
            onChangeText={(newText) => {
              setEmail(newText);
            }}
          />
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* FOOTER */}
      <View style={styles.footerContainer}>
        <Text style={styles.bodyText}>
          Don't have an account? <Text style={styles.subBodyText}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default GreenSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //   header

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
    height: 70,
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
    width: 70,
    height: 70,
    borderRadius: 50,
    marginVertical: 8,
    marginHorizontal: 32,
  },

  headerContentText: {
    position: 'absolute',
    left: 0,
    top: 140,
  },

  //   body

  bodyContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 60,
  },

  bodyTopButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },

  FooterFacebookButton: {
    flexDirection: 'row',
    width: 160,
    height: 54,
    backgroundColor: '#0064C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  FooterGoogleButton: {
    color: 'white',
    flexDirection: 'row',
    width: 160,
    height: 54,
    backgroundColor: '#FF1717',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

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

  bodyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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

  //   footer

  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  subBodyText: {
    color: '#5287f3',
    fontSize: 16,
    fontWeight: '700',
  },
});
