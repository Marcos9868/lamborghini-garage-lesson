import { View, Image } from 'react-native'
import React from 'react'
import styles from './Styles'
import '../../../index.d.ts'

import logo from '../../../assets/logo.png';
import Divider from '../Divider';

const CardView = () => {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={logo}/>
    </View>
  );
  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
    </View> 
  );
}

export default CardView