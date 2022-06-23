import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {};

const EffectExample = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const [age, setAge] = React.useState(30);
  const [refresh, setRefresh] = React.useState(new Date());

  //   ComponentDidUpdate
  React.useEffect(() => {
    console.log('1. Always run when state change');
  });

  // ComponentDidMount;
  React.useEffect(() => {
    console.log('2. Once run when component mouting');
    // Lấy danh sách hàng hóa để hiển thị
  }, []);

  // ComponentDidUpdate with conditional;
  React.useEffect(() => {
    console.log('3. Always run when refresh change');
    // lấy danh sách hàng hóa để hiện thị
  }, [refresh]);

  React.useEffect(() => {
    // Release resource
    return () => {
      console.log('4. Once run component will unmouting');
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>EffectExample</Text>
        <Text>count: {count}</Text>
        <Button
          title="Increase Count"
          onPress={() => {
            setCount((c) => c + 1);
          }}
        ></Button>
        <Text>Age : {age}</Text>
        <Button
          title="Increase Age"
          onPress={() => {
            setAge((a) => a + 1);
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default EffectExample;
