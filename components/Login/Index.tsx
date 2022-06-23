import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      {/* HEEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello React Native</Text>
        <Text style={styles.subHeaderText}>Sign in to your account</Text>
      </View>
      {/* BODY */}
      <View style={styles.bodyContainer}>
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
            placeholderTextColor={'violet'}
            onChangeText={(newText) => {
              setEmail(newText);
            }}
          />
          <MaterialCommunityIcons name="account" size={24} color="black" />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={'violet'}
            onChangeText={(newText) => {
              setPassword(newText);
            }}
          />
          <MaterialCommunityIcons name="eye-off" size={24} color="black" />
        </View>
      </View>
      {/* FOOTER */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              console.log('Email', email);
              console.log('Password', password);
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flex: 1,
    backgroundColor: '#3365ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },

  subHeaderText: {
    color: 'white',
    fontSize: 16,
  },

  bodyContainer: {
    flex: 2,
    backgroundColor: 'white',
    paddingTop: 24,
  },

  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderColor: '#f4f5f9',
    borderWidth: 1,
    backgroundColor: '#f7f9fc',
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
    backgroundColor: '#3365ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
