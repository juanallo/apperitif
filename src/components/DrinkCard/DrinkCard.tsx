import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { Card, Text } from '@ui-kitten/components'

interface props {
  resolveImage: Function
  title: string
  description: string
  open: Function
}

const header = (resolveImage: Function): React.ReactElement => (
  <ImageBackground style={styles.itemHeader} source={resolveImage()} />
)

export const DrinkCard = ({
  title,
  description,
  resolveImage,
  open,
}: props) => {
  return (
    <Card header={() => header(resolveImage)} onPress={() => open()}>
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
