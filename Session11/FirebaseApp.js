import { SafeAreaView } from 'react-native';
import React from 'react';

// import './initializeApp'; thực thi luôn khi component render
import './initializeApp';
import FirestoreExample from './FirestoreExample';
import RealtimeExample from './RealtimeExample';
import FirebaseAuthentication from './FirebaseAuthentication';
import Chat from './Chat/index';

const FirebaseExample = () => {
  return (
    <SafeAreaView>
      {/* <Text>FirebaseExample</Text> */}
      {/* <FirestoreExample /> */}
      {/* <RealtimeExample /> */}
      {/* <FirebaseAuthentication /> */}
      <Chat />
    </SafeAreaView>
  );
};

export default FirebaseExample;
