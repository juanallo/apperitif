import React from 'react'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import Logo from '../../assets/images/apperitif.svg'

export const EmptySearch = () => {
  return (
    <Layout style={styles.loading}>
      <Logo width="128" height="128" />
      <Text appearance="hint" category="h5" style={styles.loadingText}>
        We couldn't find that drink!!
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
    textAlign: 'center',
    maxWidth: 200,
    paddingTop: 20,
  },
})
