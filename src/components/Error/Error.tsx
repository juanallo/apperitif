import React from 'react'
import { Layout, Text, Icon, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
export interface ErrorProps {
  retry: Function
}

export const Error = ({ retry }: ErrorProps) => {
  return (
    <Layout style={styles.error}>
      <Icon name="alert-triangle-outline" style={styles.icon} fill="#fa7373" />
      <Text appearance="hint" category="h5" style={styles.errorText}>
        Huh, where are those drinks again?
      </Text>
      <Button onPress={() => retry()} style={styles.retry}>
        Retry
      </Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    lineHeight: 30,
    textAlign: 'center',
    maxWidth: '50%',
    paddingTop: 10,
  },
  icon: {
    width: 64,
    height: 64,
  },
  retry: {
    marginTop: 30,
  },
})
