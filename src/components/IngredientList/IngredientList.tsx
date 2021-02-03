import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Divider } from '@ui-kitten/components'
import { IngredientProps, Ingredient } from '../Ingredient/Ingredient'

export interface IngredientListProps {
  ingredients: Array<IngredientProps>
}

export const IngredientList = ({ ingredients }: IngredientListProps) => {
  return (
    <>
      {ingredients.map((ingredient, i) => (
        <View key={ingredient.id}>
          <Ingredient {...ingredient} />
          {i < ingredients.length - 1 && <Divider style={styles.divider} />}
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 10,
    marginBottom: 10,
    width: 30,
    paddingTop: 2,
  },
})
