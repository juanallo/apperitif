import React from 'react'
import { Dimensions, StyleSheet, View, ListRenderItemInfo } from 'react-native'
import { Layout, Text, List } from '@ui-kitten/components'
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
    <Layout level="1" style={styles.layout}>
      <Text style={styles.title} category="h4">
        Our Picks
      </Text>
      <List
        contentContainerStyle={styles.cards}
        data={drinks}
        numColumns={2}
        renderItem={(drink: ListRenderItemInfo<Drink>) => (
          <View style={styles.card}>
            <DrinkCard open={open} {...drink.item} />
          </View>
        )}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    display: 'flex',
    marginHorizontal: 20,
  },
  cards: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: Dimensions.get('window').width,
  },
  card: {
    // flex: 1,
    margin: 8,
    width: Dimensions.get('window').width / 2 - 24,
  },
  layout: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})
