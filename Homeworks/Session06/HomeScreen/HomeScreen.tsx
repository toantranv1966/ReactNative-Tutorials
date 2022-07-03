import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {};

const HomeScreen = (props: Props) => {
  let user: any = null;
  // login

  const submitHandler = async () => {
    const data = {
      username: 'tungnt',
      password: '123456789',
    };

    const url = 'https://training.softech.cloud/api/training/users/login';

    try {
      // Promise
      const response = await axios.post(url, data);
      console.log(response.data);
      console.log(response.data.token);
      user = response.data;
      console.log('Login thành công');
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  // List all categories (Authentication Bearer)
  const getCategories = async () => {
    const url = 'https://server.aptech.io/training/categories';
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    });
    console.log(response.data);
  };

  // API: Get a category (Authentication Bearer)

  // API: Get a weather openweathermap
  const getWeather = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=16.06984671595644&lon=108.21199135411584&appid=d0a9c31ed059ba66d0b4cbd23152d10e',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <View>
        {/* <Button title="login with asyn" onPress={onSubmitLogin} /> */}

        <Button title="login with asyn" onPress={submitHandler} />

        <Button title="List all categories" onPress={getCategories} />

        <Button title="Weather" onPress={getWeather} />

        {/* <Button title="Register User" onPress={onSubmitRegister} />

        <Button title="Get All User" onPress={getUserAsync} />

        <Button title="Get All User Basic" onPress={getUserBasic} />

        <Button title="Get All User API" onPress={getUserAPI} />

        <Button title="Delete User" onPress={deleteUser} />

        <Button title="Update User" onPress={updateUserFetch} /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
