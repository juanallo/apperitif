import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { Card, Text } from '@ui-kitten/components'
import { ColorMatrix, polaroid } from 'react-native-color-matrix-image-filters'

export interface Drink {
  resolveImage: Function
  title: string
  description: string
}
export interface DrinkProps {
  drink: Drink
  onClick: Function
}

const header = (resolveImage: Function): React.ReactElement => (
  <ColorMatrix matrix={polaroid()}>
    <ImageBackground style={styles.itemHeader} source={resolveImage()} />
  </ColorMatrix>
)

export const DrinkCard = ({ drink, onClick }: DrinkProps) => {
  const { title, description, resolveImage } = drink

  return (
    <Card header={() => header(resolveImage)} onPress={() => onClick(drink)}>
      <Text category="s1">{title}</Text>
      <Text appearance="hint" category="c1">
        {description}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  itemHeader: {
    height: 160,
  },
})
