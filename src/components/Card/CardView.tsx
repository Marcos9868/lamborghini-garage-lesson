import { View, Image } from 'react-native'
import React from 'react'
import styles from './Styles'
import '../../../index.d.ts'

import logo from '../../../assets/logo.png';

const CardView = () => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={logo} />
      </View>
    </View>
  )
}

export default CardView