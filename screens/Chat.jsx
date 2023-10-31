import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import BottomSheet from './BottomSheet'

const Chat = () => {
  const [open,setOpen]=useState(false)
  const close=()=>{
    setOpen(false)
  }
  return (
    <SafeAreaProvider>
     

      <SafeAreaView
      style={styles.container}
      >
        <TouchableOpacity onPress={()=>setOpen(!open)}>
          <Text>open</Text>
        </TouchableOpacity>
        <BottomSheet visible={open}  close={close}/>
      </SafeAreaView>
    
    </SafeAreaProvider>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"green"
  }
})