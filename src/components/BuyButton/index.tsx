import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

const BuyButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Feather
          name="shopping-cart"
          size={24}
          color="white"
        />
        <Text style={styles.textButton}>Buy This</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BuyButton