import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { string } from 'prop-types'

type Props = {}

interface User {
    id: number,
    nameL string,
}

const =[count, setCount] = useState(0)
const [todos, setTodo] = React.useState('')
const [user, setUser] = React.useState(null)

const StateExample = (props: Props) => {
  return (
    <View>
      <Text>index</Text>
      <Text>{count}</Text>
      {todos.map((item, index)=>{
        return <Text key={index}>{item}</Text>
      })}


      <Button
      title='Add New todo'
      onPress={()=>
        setTodo((t)=>[...,'New todo' + new Date()])}>
        </Button>

        <Button
        title='Login'
        onPress={()=>
          setUser((u:any)=>({...u,name:'peter'})}>
        >

        </Button>
    </View>
  )
}

export default StateExample 