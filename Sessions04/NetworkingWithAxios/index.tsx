import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import axios from 'axios';
type Props = {};

const NetworkingWithAxios = (props: Props) => {
  let user: any = null;
  const onSubmit = () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://server.aptech.io/training/auth/login';

    // Promise
    axios
      .post(url, data)
      .then((result) => {
        console.log(result.data);
        console.log('Login thành công');
      })
      .catch((err) => {
        console.error(err);
        console.log('Login thất bại');
      });
  };

  const onSubmitAsync = async () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://server.aptech.io/training/auth/login';

    try {
      // Promise
      const response = await axios.post(url, data);
      console.log(response.data);
      user = response.data;
      console.log('Login thành công');
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  const getProductAsync = async () => {
    const url = 'https://server.aptech.io/training/products';
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + user.access_token,
      },
    });
    console.log(response.data);
  };

  return (
    <SafeAreaView>
      <View>
        <Text></Text>
        <Button title="login" onPress={onSubmit} />

        <Button title="login with asyn" onPress={onSubmitAsync} />

        <Button title="Get Product" onPress={getProductAsync} />
      </View>
    </SafeAreaView>
  );
};

export default NetworkingWithAxios;
