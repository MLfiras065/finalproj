import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DescText = ({liens,text}) => {
  return (
    
      <Text numberOfLines={liens} style={styles.desc} >{text}</Text>
    
  )
}

export default DescText

const styles = StyleSheet.create({
    desc:{
        paddingVertical:10,fontFamily:"regular",
        textAlign:"justify",
        fontSize:18

    }
})