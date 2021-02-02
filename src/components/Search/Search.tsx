import React from 'react'
import { Input, Icon } from '@ui-kitten/components'
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TouchableWithoutFeedback,
} from 'react-native'

interface props {
  search: (searchInput: String, clear: Function) => void
  defaultValue?: string
}

const renderIcon = (props: any) => (
  <TouchableWithoutFeedback>
    <Icon {...props} name="search" />
  </TouchableWithoutFeedback>
)

export const Search = ({ search, defaultValue = '' }: props) => {
  const ref = React.createRef<Input>()
  const doSearch = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
    const NAVIGATION_DURATION = 400
    if (nativeEvent.text) {
      const clear = () =>
        setTimeout(() => {
          ref.current?.clear()
        }, NAVIGATION_DURATION)

      search(nativeEvent.text, clear)
    }
  }

  return (
    <Input
      size="large"
      ref={ref}
      textStyle={{ minHeight: 42 }}
      placeholder="Feeling thirsty?"
      defaultValue={defaultValue}
      accessoryRight={renderIcon}
      onEndEditing={doSearch}
    />
  )
}
