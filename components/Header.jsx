import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import ReausbleText from './ReausbleText'
const Header = ({color,title,onPress,onPress1,icon}) => {
  return (
    <View style={styles.overlaye}>
     <View style={styles.row}>
<TouchableOpacity 
onPress={onPress}
style={styles.box1(color)}>
<AntDesign
name='left'
size={24}
/>
</TouchableOpacity>
<ReausbleText
  text={title}
  family={"medium"}
  size={22}
  color={"gray"}
/>
<TouchableOpacity onPress={onPress1}>
<AntDesign
name={icon}
size={24}
/>
</TouchableOpacity>
     </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    overlaye:{
        position:"absolute",
        top:10,
        left:0,
        right:0,
    justifyContent:"center" 
   },row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",  
},
box1:(color)=>({
backgroundColor:color,
width:30,
height:30,
borderRadius:9,
justifyContent:"center"
}),
box:(color)=>({
    backgroundColor:color,
    width:30,
    height:30,
    borderRadius:9,
    justifyContent:"center"
    })
})