import React from 'react'
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { ColorMatrix, polaroid } from 'react-native-color-matrix-image-filters'
import { IngredientList } from '../components/IngredientList/IngredientList'
import { Instructions } from '../components/Instructions/Instructions'

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />

export const DetailsScreen = ({ route, navigation }: any) => {
  const navigateBack = () => {
    navigation.goBack()
  }

  const { title, description, image, ingredients, instructions } = route.params

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <TopNavigation style={styles.top} accessoryLeft={BackAction} />
        <ColorMatrix matrix={polaroid()}>
          <ImageBackground source={image} style={styles.image} />
        </ColorMatrix>

        <Layout style={styles.content}>
          <View style={styles.titleContainer}>
            <Text category="h1" style={styles.title}>
              {title}
            </Text>
            <Text appearance="hint">{description}</Text>
          </View>
          <View style={styles.ingredients}>
            <IngredientList ingredients={ingredients} />
          </View>
          <Text category="h2" style={styles.background}>
            Ingredients
          </Text>
        </Layout>
        <Instructions text={instructions} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  top: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: 55,
    borderRadius: 400,
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height / 7) * 3,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 48,
    paddingVertical: 30,
  },
  titleContainer: {
    marginLeft: -32,
    paddingLeft: 28,
    borderLeftWidth: 4,
    borderLeftColor: '#6843CF',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  ingredients: {
    paddingTop: 50,
    paddingBottom: 40,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 54,
    fontWeight: 'bold',
    transform: [
      { rotate: '-90deg' },
      { translateY: 110 },
      { translateX: -170 },
    ],
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,0.0)',
    textDecorationStyle: 'double',
    textDecorationColor: 'black',
  },
})
