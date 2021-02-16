import * as React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { Hero } from '../components/Hero/Hero'
import { Search } from '../components/Search/Search'
import { OurPicks } from '../components/OurPicks/OurPicks'
import { Drink } from '../api/Adapter'
import { OurPicksContainer } from '../containers/OurPicksContainer'
import { Offline } from '../components/Offline/Offline'
import { NetworkConsumer } from 'react-native-offline'

export const HomeScreen = ({ navigation }: any) => {
  const navigateDetails = (data: Drink) => {
    navigation.navigate('Details', data)
  }

  const navigateSearch = (searchInput: string, clear: Function) => {
    navigation.navigate('Search', { input: searchInput })
    clear()
  }

  return (
    <SafeAreaView style={styles.view}>
      <Layout style={styles.layout}>
        <Offline />
        <View style={styles.hero}>
          <Hero />
        </View>
        <View style={styles.actions}>
          <Search search={navigateSearch} />
        </View>
        <View style={styles.drinks}>
          <NetworkConsumer>
            {({ isConnected }) => {
              return (
                <OurPicksContainer isConnected={isConnected}>
                  {(drinks) => (
                    <OurPicks open={navigateDetails} drinks={drinks} />
                  )}
                </OurPicksContainer>
              )
            }}
          </NetworkConsumer>
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
