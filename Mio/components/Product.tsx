import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ViewStyle,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import numeral from 'numeral';
import { Feather } from '@expo/vector-icons';

// VIETNAMESE CONFIG
import 'numeral/locales/vi';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { RotateInDownLeft } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
numeral.locale('vi');

const WIDTH_SCREEN = Dimensions.get('window').width;

type Props = {
  index: null;
  data: any;
  style: ViewStyle;
};

const Product = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[styles.container, props.style]}
      onPress={() => {
        navigation.navigate('DetailScreen', {
          productId: props.data.id,
        });
      }}
    >
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/product-1.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.data.name}</Text>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>{props.data.desc}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text style={styles.textPrice}>
                {numeral(props.data.price).format('0, 0 $')}
              </Text>
              <Text style={styles.textOldPrice}>
                {numeral(props.data.oldPrice).format('0, 0 $')}
              </Text>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                Alert.alert('Online Store', 'Coming Soon');
              }}
            >
              <Feather name="shopping-cart" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: (WIDTH_SCREEN - 36) / 2,
    height: (WIDTH_SCREEN - 36) / 2,
  },
  productContainer: {
    width: (WIDTH_SCREEN - 36) / 2,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  textContainer: {
    padding: 12,
  },

  name: {
    fontFamily: 'SVN-Gilroy-Medium',
    fontSize: 18,
  },

  descContainer: {
    minHeight: 72,
    paddingVertical: 8,
  },

  desc: {
    fontFamily: 'SVN-Gilroy-Regular',
    lineHeight: 18,
  },

  textPrice: {
    color: '#EE234C',
    fontFamily: 'SVN-Gilroy-SemiBold',
    fontSize: 22,
  },
  textOldPrice: {
    textDecorationLine: 'line-through',
    color: '#636e72',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 48,
    width: 48,
    backgroundColor: '#EE234C',
  },
});
