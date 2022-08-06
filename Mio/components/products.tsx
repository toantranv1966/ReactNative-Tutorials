import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Product from './Product';

type Props = {};

const products = [
  {
    id: 'P-129856',
    name: 'Thịt tươi sống',
    desc: 'Giao hàng dự kiến trong 2 giờ',
    oldPrice: 54000,
    price: 46000,
  },
  {
    id: 'P-382085',
    name: 'Thịt vai',
    desc: 'Giao hàng dự kiến trong 2 giờ',
    oldPrice: 64000,
    price: 54000,
  },
  {
    id: 'P-195800',
    name: 'Thịt sườn',
    desc: 'Giao hàng dự kiến trong 2 giờ',
    oldPrice: 74000,
    price: 58000,
  },
  {
    id: 'P-906326',
    name: 'Thịt mông',
    desc: 'Giao hàng dự kiến trong 2 giờ',
    oldPrice: 74000,
    price: 58000,
  },
];

const Products = (props: Props) => {
  const renderItem = ({ item, index }) => {
    return (
      <Product
        data={item}
        index={index}
        style={{ paddingLeft: index % 2 === 0 ? 12 : 0 }}
      />
    );
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item, index) => `product-${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
