import * as React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { Hero } from '../components/Hero/Hero'
import { Search } from '../components/Search/Search'
import { DrinkList } from '../components/DrinkList/DrinkList'

const DRINKS = [
  {
    title: 'Margarita',
    description: 'Tequila - Lime',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg',
    }),
  },
  {
    title: 'Snake Bite',
    description: 'Lager - Cider',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg',
    }),
  },
  {
    title: 'Mulled Wine',
    description: 'Brandy - wine',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com//images//media//drink//iuwi6h1504735724.jpg',
    }),
  },
  {
    title: '501 Blue',
    description: 'Blue Curacao',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg',
    }),
  },
]

export const HomeScreen = ({ navigation }: any) => {
  const navigateDetails = () => {
    navigation.navigate('Details')
  }

  const navigateSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <SafeAreaView style={styles.view}>
      <Layout style={styles.layout}>
        <View style={styles.hero}>
          <Hero />
        </View>
        <View style={styles.actions}>
          <Search navigateToSearch={navigateSearch} />
        </View>
        <View style={styles.drinks}>
          <DrinkList open={navigateDetails} drinks={DRINKS} />
        </View>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  scroll: { display: 'flex', height: '100%', width: '100%' },
  layout: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  hero: {
    paddingTop: 40,
    height: 270,
  },
  actions: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drinks: {
    display: 'flex',
    width: '100%',
    flex: 2,
    paddingTop: 10,
  },
})
