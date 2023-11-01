import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import ReausbleText from './ReausbleText'

const Counter = () => {
    const [count,setCount]=useState(0)
    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
    if(count>1){    
        setCount(count-1)
    }
}
  return (
    <View style={styles.row}>
      <AntDesign
      name='minussquareo'
      size={26}
      color={"gray"}
      onPress={dec}
      />
   <ReausbleText
text={`${count}`}
family={"medium"}
size={12}
color={"gray"}
/>
      <AntDesign
      name='plussquareo'
      size={26}
      color={"gray"}
      onPress={inc}
      />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})