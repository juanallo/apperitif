import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'
import { DrinkList } from '../components/DrinkList/DrinkList'
import { Search } from '../components/Search/Search'
import { Drink } from '../api/Adapter'
import { SearchContainer } from '../containers/SearchContainer'

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />

export const SearchScreen = ({ route, navigation }: any) => {
  const [input, setInput] = useState(route.params.input)

  const navigateBack = () => {
    navigation.goBack()
  }

  const navigateDetails = (data: Drink) => {
    navigation.navigate('Details', data)
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  )

  const search = (input: string) => {
    setInput(input)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Layout level="2" style={styles.layout}>
        <TopNavigation
          title="Search Results"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Search search={search} defaultValue={input} />
        <SearchContainer search={input}>
          {(drinks) => <DrinkList drinks={drinks} open={navigateDetails} />}
        </SearchContainer>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  layout: { flex: 1 },
})
