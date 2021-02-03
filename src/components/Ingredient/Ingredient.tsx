import * as React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'

export interface IngredientProps {
  id: string
  measure: string
  name: string
}

export const Ingredient = ({ measure, name }: IngredientProps) => {
  return (
    <View>
      <Text appearance="hint">{measure}</Text>
      <Text category="h6">{name}</Text>
    </View>
  )
}
