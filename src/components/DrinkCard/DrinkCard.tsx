import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { Card, Text } from '@ui-kitten/components'
import { ColorMatrix, polaroid } from 'react-native-color-matrix-image-filters'

export interface Drink {
  image: {
    uri: string
  }
  title: string
  description: string
}
export interface DrinkProps {
  drink: Drink
  onClick: Function
}

const header = (image: Drink['image']): React.ReactElement => (
  <ColorMatrix matrix={polaroid()}>
    <ImageBackground style={styles.itemHeader} source={image} />
  </ColorMatrix>
)

export const DrinkCard = ({ drink, onClick }: DrinkProps) => {
  const { title, description, image } = drink

  return (
    <Card
      header={() => header(image)}
      onPress={() => onClick(drink)}
      style={styles.card}>
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
  card: {
    flex: 1,
  },
})
