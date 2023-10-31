import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ReausbleText = ({text,family,size,color,align}) => {
  return (
    
      <Text style={styles.textStyle(family,size,color,align)}>{text}</Text>
    
  )
}

export default ReausbleText

const styles = StyleSheet.create({
    textStyle:(family,size,color,align)=>({
fontFamily:family,
fontSize:size,
color:color,textAlign:align
    })
})