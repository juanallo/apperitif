import React from 'react'
import { Dimensions, StyleSheet, View, ListRenderItemInfo } from 'react-native'
import { List } from '@ui-kitten/components'
import { DrinkCard } from '../DrinkCard/DrinkCard'

interface Drink {
  title: string
  description: string
  resolveImage: Function
}

interface props {
  open: Function
  drinks: Array<Drink>
}

export const DrinkList = ({ open, drinks }: props) => {
  return (
    <List
      contentContainerStyle={styles.cards}
      data={drinks}
      numColumns={2}
      renderItem={(drink: ListRenderItemInfo<Drink>) => (
        <View style={styles.card}>
          <DrinkCard onClick={open} drink={drink.item} />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  cards: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: Dimensions.get('window').width,
  },
  card: {
    margin: 8,
    width: Dimensions.get('window').width / 2 - 24,
  },
})
