import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Btn = ({onpress,width,backgroundColor,borderWidth,borderColor,btntext}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.btnstyle(width,backgroundColor,borderWidth,borderColor)}>
      <Text style={styles.btntext()}>{btntext}</Text>
    </TouchableOpacity>
  )
}

export default Btn

const styles = StyleSheet.create({
btntext:(textColor)=>({
    fontFamily:"meduim",
    fontSize:25,
    color:textColor
}),
btnstyle:(width,backgroundColor,borderWidth,borderColor)=>({
    width:width,
    backgroundColor:backgroundColor,
    alignItem:"center",
    justifyContent:"center",
    height:45 
    ,
    bordeRadius:20
    ,borderWidth,borderColor:borderColor
})

})