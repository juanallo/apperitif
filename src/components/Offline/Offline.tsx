import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NetworkConsumer } from 'react-native-offline'
import { Text } from '@ui-kitten/components'

export interface OfflineProps {
  message?: string
}

export const Offline = ({
  message = 'You seem to be offline!',
}: OfflineProps) => {
  return (
    <NetworkConsumer>
      {({ isConnected }) => {
        return !isConnected ? (
          <View style={styles.container}>
            <Text status="primary">{message}</Text>
          </View>
        ) : null
      }}
    </NetworkConsumer>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
})
