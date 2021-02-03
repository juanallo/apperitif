import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'
import { DrinkList } from '../components/DrinkList/DrinkList'
import { Search } from '../components/Search/Search'
import { DRINKS, Drink } from '../api/data'

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />

export const SearchScreen = ({ route, navigation }: any) => {
  const { input } = route.params

  const navigateBack = () => {
    navigation.goBack()
  }

  const navigateDetails = (data: Drink) => {
    navigation.navigate('Details', data)
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <Layout level="2" style={styles.layout}>
        <TopNavigation
          title="Search Results"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Search search={() => {}} defaultValue={input} />
        <DrinkList drinks={DRINKS} open={navigateDetails} />
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  layout: { flex: 1 },
})
