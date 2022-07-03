import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import axios from 'axios';
type Props = {};

const SignInScreen = (props: Props) => {
  let user: any = null;
  // login
  const onSubmitAsync = async () => {
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

  // register
  const onSubmitRegister = async () => {
    // const data = {
    //   username: 'tungnt',
    //   email: 'tungnt@softech.edu.vn',
    //   password: '123456789',
    //   fullName: 'Ngô Thanh Tùng',
    // };

    const data = {
      username: 'toantv',
      email: 'toantv@softech.edu.vn',
      password: '123456789',
      fullName: 'Tran Van toan',
    };

    const url = 'https://training.softech.cloud/api/training/users/register';

    try {
      // Promise
      const response = await axios.post(url, data);
      console.log(response.data);
      user = response.data;
      console.log('Đăng ký thành công');
    } catch (err) {
      console.error(err);
      console.log('Đăng ký thất bại');
    }
  };

  const getUserAsync = async () => {
    const url = 'https://training.softech.cloud/api/training/users';
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    });
    console.log(response.data);
  };

  const getUserBasic = async () => {
    const url = 'https://training.softech.cloud/api/training/users/auth/basic';
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Basic dHVuZ250OjEyMzQ1Njc4OQ==',
      },
    });
    console.log(response.data);
  };

  const getUserAPI = async () => {
    const url =
      'https://training.softech.cloud/api/training/users/auth/api-key';
    const response = await axios.get(url, {
      headers: {
        'x-api-key': 'aptech-tester-pro',
      },
    });
    console.log(response.data);
  };

  const deleteUser = async () => {
    const url =
      'https://training.softech.cloud/api/training/users/62bd94a842adaa3c71e9dfd0';
    const response = await axios.delete(url, {
      headers: {
        Authorization: 'Bearer ' + user.token,
      },
    });
    console.log(response.data);
  };

  const updateUser = async () => {
    const data = JSON.stringify({
      email: 'toantv@softech.edu.vn',
      password: '123456789',
      fullName: 'Trần Văn Toàn',
    });
    const url =
      'https://training.softech.cloud/api/training/users/62bd950b42adaa3c71e9dfd1';
    const response = await axios.patch(url, {
      headers: {
        Authorization: 'Bearer ' + user.token,
        'Content-Type': 'application/json',
      },
      data: data,
    });
    console.log(response.data);
  };

  const updateUserFetch = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250IiwiZnVsbG5hbWUiOiJOZ8O0IFRoYW5oIFTDuW5nIiwiZW1haWwiOiJ0dW5nbnRAc29mdGVjaC5lZHUudm4ifSwiaWF0IjoxNjU2NTkxNjU3LCJleHAiOjE2NTY2NzgwNTcsImF1ZCI6InNvZnRlY2guY2xvdWQiLCJpc3MiOiJzb2Z0ZWNoLmNsb3VkIiwic3ViIjoiNjJiYjgzMWJhOWQ4YjhiYWRlNzcwNTU3In0.ExEnM-4_voDJvhGkrOOtjPktFJqdfDDxZMa5C0mX5idkycsmuPY9HgsfICrNc6_NYpkCL3-v4JB6PbGujpRAVg'
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email: 'toantv@softech.edu.vn',
      password: '123456789',
      fullName: 'Trần Văn Toàn',
    });

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch(
      'https://training.softech.cloud/api/training/users/62bd950b42adaa3c71e9dfd1',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <SafeAreaView>
      <Text>SignInScreen</Text>
      <View>
        <Text></Text>

        <Button title="login with asyn" onPress={onSubmitAsync} />

        <Button title="Register User" onPress={onSubmitRegister} />

        <Button title="Get All User" onPress={getUserAsync} />

        <Button title="Get All User Basic" onPress={getUserBasic} />

        <Button title="Get All User API" onPress={getUserAPI} />

        <Button title="Delete User" onPress={deleteUser} />

        <Button title="Update User" onPress={updateUserFetch} />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
