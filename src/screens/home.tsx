import * as React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Button, Layout } from '@ui-kitten/components'
import { Hero } from '../components/Hero/Hero'

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
          <Button onPress={navigateSearch}>Open Search</Button>
          <Button onPress={navigateDetails}>Open Details</Button>
        </View>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: '50%',
  },
  view: { flex: 1 },
  layout: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '20%',
    boxSizing: 'content-box',
  },
  actions: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
