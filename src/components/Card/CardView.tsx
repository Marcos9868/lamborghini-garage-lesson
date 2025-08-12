import { View, Image, Text, Button } from 'react-native'
import React from 'react'
import styles from './Styles'
import '../../../index.d.ts'

import logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { BASE_CAR_URL } from '../../api/Api';
import BuyButton from '../BuyButton';

const CardView = () => {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={logo}/>
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>LAMBORGHINI</Text>
      <Text style={styles.carName}>MODEL</Text>
    </View>
  );

  const renderCarLogo = () => (
    <Image 
      style={styles.carLogo}
      source={{ uri: `${BASE_CAR_URL}/1.png` }}
    />
  );

  const renderPriceControl = () => (
    <View style={styles.priceContainer}>
      <Button color={"#01A6B3"} title="<" onPress={() => {}}/>
      <Text style={styles.priceLabel}> VALOR</Text>
      <Button color={"#01A6B3"} title=">" onPress={() => {}}/>
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarLogo()}
      <Divider />
      <BuyButton />
      {renderPriceControl()}
    </View> 
  );
}

export default CardView