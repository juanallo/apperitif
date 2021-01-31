import * as React from 'react'
import {SafeAreaView} from 'react-native'
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components'

export const HomeScreen = ({navigation}: any) => {
  const navigateDetails = () => {
    navigation.navigate('Details')
  }

  const navigateSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateSearch}>Open Search</Button>
        <Button onPress={navigateDetails}>Open Detail</Button>
      </Layout>
    </SafeAreaView>
  )
}
