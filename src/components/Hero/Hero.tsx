import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'
import Logo from '../../assets/images/apperitif.svg'

export const Hero = () => {
  return (
    <View style={styles.container}>
      <Text category="h1">Apperitif</Text>
      <Logo height={200} width={200} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
