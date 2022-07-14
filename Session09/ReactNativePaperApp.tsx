import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import {
  Avatar,
  Appbar,
  Button,
  DefaultTheme,
  Provider as PaperProvider,
  DataTable,
  Dialog,
  Portal,
  Paragraph,
  Menu,
  Modal,
  Searchbar,
  Snackbar,
  Switch,
  TouchableRipple,
} from 'react-native-paper';
import ButtonExamples from './components/ButtonExamples';

type Props = {};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'tomato',
    // accent: 'yellow',
  },
};

const ReactNativePaperApp = (props: Props) => {
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 24,
    height: 300,
    borderRadius: 8,
  };

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  // Snackbar
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const onToggleSnackBar = () => setSnackbarVisible(!visible);

  const onDismissSnackBar = () => setSnackbarVisible(false);

  // Switch
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.BackAction onPress={{}} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="camera" onPress={{}} />
        <Appbar.Action icon="magnify" onPress={{}} />

        <Appbar.Action icon="dots-vertical" onPress={{}} />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.container}>
        <Button loading={false} disabled={false} icon="camera">
          Press Me
        </Button>

        {/* <Button icon="cart" size={30}></Button> */}
        <Button mode="contained" onPress={showDialog}>
          Chọn nghề nghiệp
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <ButtonExamples />
        <View>
          <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
          <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
          <Menu.Item
            icon="content-cut"
            onPress={() => {}}
            title="Cut"
            disabled
          />
          <Menu.Item
            icon="content-copy"
            onPress={() => {}}
            title="Copy"
            disabled
          />
          <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
        </View>

        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Example Modal. Click outside this area to dismiss.</Text>
            <Button
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Close
            </Button>
          </Modal>
        </Portal>
        <Switch
          color="yellow"
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 5,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: 'gray',
            }}
          >
            <Avatar.Image
              size={50}
              source={{ uri: 'https://i.pravatar.cc/300' }}
            />
            <Text>Toan Tran</Text>
          </View>
        </TouchableRipple>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Show Modal
        </Button>
      </View>
      {/* Snackbar */}
      <View>
        <Button onPress={onToggleSnackBar}>
          {snackbarVisible ? 'Hide' : 'Show'}
        </Button>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Hủy',
            onPress: () => {
              // Do something
              setSnackbarVisible(false);
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    </PaperProvider>
  );
};

export default ReactNativePaperApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
