import { View, Image, Text, Button } from 'react-native'
import React, { useEffect, useState }from 'react'
import styles from './Styles'
import '../../../index.d.ts'

import logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { BASE_CAR_URL } from '../../api/Api';
import BuyButton from '../BuyButton';
import { CarModel } from './Props';
import { handleNextItem, handlePreviousItem, loadCarData } from './Actions';

const CardView = () => {
  const [carData, setCarData] = useState<CarModel | null>(null);
  useEffect(() => {
    (async () => {
      await loadCarData(3, setCarData);
    })();
  }, []);
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={logo}/>
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>LAMBORGHINI</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarLogo = () => (
    <Image 
      style={styles.carLogo}
      source={{ uri: `${BASE_CAR_URL}/${carData?.id}.png` }}
    />
  );

  const renderPriceControl = () => (
    <View style={styles.priceContainer}>
      <Button color={"#01A6B3"} title="<" onPress={() => handlePreviousItem(carData, setCarData)}/>
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button color={"#01A6B3"} title=">" onPress={() => handleNextItem(carData, setCarData)}/>
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