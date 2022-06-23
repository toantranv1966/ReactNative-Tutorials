import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const index1 = (props: Props) => {
  return (
    <View>
        <Text>You clicked {count}  </Text>
        <Button
        title=
        ></Button>
      <Button
      title
      onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      
    </View>
  )
}

export default index1