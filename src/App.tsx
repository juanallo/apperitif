import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import customTheme from './assets/themes/theme'
import { AppNavigator } from './screens/navigation'
import { NetworkProvider } from 'react-native-offline'

const theme = { ...eva.light, ...customTheme }

export default (): React.ReactFragment => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={theme}>
      <NetworkProvider>
        <AppNavigator />
      </NetworkProvider>
    </ApplicationProvider>
  </>
)
