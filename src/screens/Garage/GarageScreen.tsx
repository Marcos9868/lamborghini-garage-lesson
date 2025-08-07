import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

const GarageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
      </View>
      <Text>GarageScreen</Text>
    </View>
  )
}

export default GarageScreen