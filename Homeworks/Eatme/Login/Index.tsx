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

const Eatme = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      {/* HEEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerBranch}>
          <View style={styles.headerLogo}>
            <MaterialIcons name="restaurant" size={38} color="#FFFFFF" />
            {/* <MaterialIcons name="delivery-dining" size={38} color="#FFFFFF" />
             */}
            {/* <MaterialCommunityIcons
              name="truck-delivery"
              size={38}
              color="#FFFFFF"
            /> */}
          </View>
          <Text style={styles.headerBranchText}>Eatme</Text>
        </View>
        <View style={styles.headerContentText}>
          <Text style={styles.subHeaderText}>Let's Sign You In</Text>
          <Text style={styles.subHeaderText2}>
            Welcome back, you've been missed
          </Text>
        </View>
      </View>
      {/* BODY */}
      <View style={styles.bodyContainer}>
        <Text style={styles.headerTextLabel}>Email</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="off"
            keyboardAppearance="dark"
            returnKeyLabel="done"
            returnKeyType="done"
            placeholder="Enter your email"
            placeholderTextColor={'#111A2C'}
            onChangeText={(newText) => {
              setEmail(newText);
            }}
          />

          <MaterialCommunityIcons
            name="check-circle-outline"
            size={24}
            color="#27AE60"
          />
        </View>
        <Text style={styles.headerTextLabel}>Pasword</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={'#111A2C'}
            onChangeText={(newText) => {
              setPassword(newText);
            }}
          />
          <AntDesign name="eyeo" size={24} color="black" />
        </View>

        <View style={styles.optionInput}>
          <View style={styles.optionSaveMe}>
            <Switch
              style={styles.buttonSwitch}
              trackColor={{ false: '#898B9A', true: '#81b0ff' }}
              //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              //   onValueChange={toggleSwitch}
              //   value={isEnabled}
            />
            <Text style={{ color: '#898B9A' }}>Save me</Text>
          </View>
          <View style={styles.optionSaveMe}>
            <Text style={{ color: '#898B9A' }}>Forgot password?</Text>
          </View>
        </View>
        <View style={styles.bodyButton}>
          <TouchableOpacity style={styles.signButton}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.bodyText}>
            Don't have an account?{' '}
            <Text style={styles.subBodyText}>Sign Up</Text>
          </Text>
        </View>
      </View>
      {/* FOOTER */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.FooterFacebookButton}>
          <Ionicons name="logo-facebook" size={24} color="#FFFFFF" />
          <Text
            style={styles.buttonText}
            onPress={() => {
              console.log('Email', email);
              console.log('Password', password);
            }}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.FooterGoogleButton}>
          <Ionicons name="logo-google" size={24} color="black" />
          <Text
            style={styles.buttonGoogleText}
            onPress={() => {
              console.log('Email', email);
              console.log('Password', password);
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Eatme;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },

  //   headerContainer: {
  //     flex: 1,
  //     backgroundColor: '#FFFFFF',
  //     marginTop: 20,
  //   },

  //   headerBranch: {
  //     flexDirection: 'row',
  //   },

  //   headerLogo: {
  //     backgroundColor: '#FF6C44',
  //     width: 60,
  //     height: 60,
  //     borderRadius: 10,
  //     marginRight: 16,
  //   },

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

  subHeaderText: {
    color: '#111A2C',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 10,
  },

  subHeaderText2: {
    color: '#111A2C',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
  },

  buttonSwitch: {
    marginRight: 4,
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

  optionSaveMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTextLabel: {
    color: '#898B9A',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14.7,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  bodyContainer: {
    flex: 2,
    backgroundColor: 'white',
    paddingTop: 24,
  },

  bodyButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    color: '#525C67',
  },

  subBodyText: {
    color: '#FF6C44',
    fontSize: 16,
    fontWeight: '700',
  },

  signButton: {
    height: 54,
    width: 350,
    backgroundColor: '#FF6C44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
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

  footerContainer: {
    padding: 12,
    backgroundColor: 'white',
  },

  textInput: {
    height: 54,
    flex: 1,
    fontSize: 16,
  },

  button: {
    height: 54,
    backgroundColor: '#FF6C44',
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

  FooterFacebookButton: {
    flexDirection: 'row',
    height: 54,
    backgroundColor: '#0064C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 4,
  },

  FooterGoogleButton: {
    flexDirection: 'row',
    height: 54,
    backgroundColor: '#F5F5F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonGoogleText: {
    color: '#111A2C',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});
