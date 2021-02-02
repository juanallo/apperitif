import React from 'react'
import { SafeAreaView } from 'react-native'
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'
import { DrinkList } from '../components/DrinkList/DrinkList'
import { Search } from '../components/Search/Search'

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
  {
    title: '501 Blue',
    description: 'Blue Curacao',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg',
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
  {
    title: '501 Blue',
    description: 'Blue Curacao',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg',
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
  {
    title: '501 Blue',
    description: 'Blue Curacao',
    resolveImage: () => ({
      uri:
        'https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg',
    }),
  },
]

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />

export const SearchScreen = ({ route, navigation }: any) => {
  const { input } = route.params

  const navigateBack = () => {
    navigation.goBack()
  }

  const navigateDetails = () => {
    navigation.navigate('Details')
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout level="2" style={{ flex: 1 }}>
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
