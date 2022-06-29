import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';

type Props = {};

const imageExample = (props: Props) => {
  return (
    <View>
      <ImageBackground
        blurRadius={20}
        resizeMode="cover"
        source={'./my-icon.png'}
        style={{ width: '100%', height: '100%' }}
      >
        <Text>Inside</Text>
      </ImageBackground>
      <Text>imageExample</Text>
      <Image source={require('./my-icon.png')} style={{}} />
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={{ width: 400, height: 400 }}
      />
      <Image
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache',
          },
          body: 'Your Body goes here',
        }}
        style={{ width: 400, height: 400 }}
      />
      // include at least width and height!
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: 'contain',
        }}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Image
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          cache: 'only-if-cached',
        }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
};

export default imageExample;
