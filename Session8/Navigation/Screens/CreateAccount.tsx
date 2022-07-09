import { View, Text, Button } from 'react-native';
import React from 'react';

import { AuthContext } from '../context';

const CreateAccount = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1dd1a1',
      }}
    >
      <Text>CreateAccount</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </View>
  );
};

export default CreateAccount;
