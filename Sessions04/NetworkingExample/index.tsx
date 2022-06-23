import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';

type Props = {};

const NetworkingExample = (props: Props) => {
  const onSubmit = () => {
    const data = {
      username: 'tungnt',
      password: '123456789',
    };
    const url = 'https://training.softech.cloud/api/training/users/login';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const onSubmitAsync = async () => {
    const data = {
      username: 'tungnt',
      password: '123456789',
    };
    const url = 'https://training.softech.cloud/api/training/users/login';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <Text></Text>
      <Button title="login" onPress={onSubmit} />

      <Button title="login with asyn" onPress={onSubmitAsync} />
    </SafeAreaView>
  );
};

export default NetworkingExample;
