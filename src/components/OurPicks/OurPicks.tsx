import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { DrinkList } from '../DrinkList/DrinkList'

interface Drink {
  title: string
  description: string
  image: {
    uri: string
  }
}

interface props {
  open: Function
  drinks: Array<Drink>
}

export const OurPicks = ({ open, drinks }: props) => {
  return (
    <Layout level="1" style={styles.layout}>
      <Text style={styles.title} category="h4">
        Our Picks
      </Text>
      <DrinkList open={open} drinks={drinks} />
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
  layout: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})
