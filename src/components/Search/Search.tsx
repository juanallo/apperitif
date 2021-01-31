import React from 'react'
import { Input, Icon } from '@ui-kitten/components'
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TouchableWithoutFeedback,
} from 'react-native'

interface props {
  navigateToSearch: Function
}

const renderIcon = (props: any) => (
  <TouchableWithoutFeedback>
    <Icon {...props} name="search" />
  </TouchableWithoutFeedback>
)

export const Search = ({ navigateToSearch }: props) => {
  const ref = React.createRef<Input>()
  const search = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
    const NAVIGATION_DURATION = 400
    if (nativeEvent.text) {
      navigateToSearch(nativeEvent.text)
      setTimeout(() => {
        ref.current?.clear()
      }, NAVIGATION_DURATION)
    }
  }

  return (
    <Input
      size="large"
      ref={ref}
      textStyle={{ minHeight: 42 }}
      placeholder="I am feeling lucky"
      accessoryRight={renderIcon}
      onEndEditing={search}
    />
  )
}
