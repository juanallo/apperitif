import React from 'react'
import { Layout, Spinner, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

export interface LoadingProps {
  text: string
}

export const Loading = ({ text }: LoadingProps) => {
  return (
    <Layout style={styles.loading}>
      <Spinner status="primary" size="giant" />
      <Text appearance="hint" category="h5" style={styles.loadingText}>
        {text}
      </Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    paddingTop: 20,
  },
})
