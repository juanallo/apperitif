import * as React from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'
import { Button, Layout } from '@ui-kitten/components'
import { Hero } from '../components/Hero/Hero'
import { Search } from '../components/Search/Search'

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
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scroll}
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.hero}>
            <Hero />
          </View>
          <View style={styles.actions}>
            <Search navigateToSearch={navigateSearch} />
            <Button onPress={navigateDetails}>Open Details</Button>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  hero: {
    minHeight: 150,
  },
  view: { flex: 1 },
  scroll: { display: 'flex', height: '100%', width: '100%' },
  layout: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '20%',
  },
  actions: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
