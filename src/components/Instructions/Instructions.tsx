import * as React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

export interface InstructionsProps {
  text: string
}

export const Instructions = ({ text }: InstructionsProps) => {
  return (
    <Layout style={styles.container} level="2">
      <Text style={styles.instructions} category="s1">
        Instructions
      </Text>
      <Text appearance="hint">{text}</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 48,
    paddingVertical: 24,
  },
  instructions: {
    marginBottom: 16,
  },
})
