import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {useRoute}from "@react-navigation/native"

const Detalies = () => {
  const [selectTime,setSelectTime]=useState("")
  const route=useRoute()
  const id=route.params
console.log(id);
useEffect(()=>{
  console.log(new Date().getMonth()+1);
},[])
    return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:"data:image/jpeg;base64,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"}}/>
   <Text styles={styles.title}> houseone</Text>
   <Text styles={styles.title}> date </Text>
   <Text styles={styles.title}>Availbel places</Text>
   <FlatList
   numColumns={2}
   data={[11,12,13,14,14,16]}
   renderItem={({item,index})=>{
    return (
      <TouchableOpacity 
      onPress={()=>{setSelectTime(index)}}
      style={[styles.date,{borderColor:selectTime==index?"blue":'black'}]}>
        <Text style={{borderColor:selectTime==index?"blue":'black'}}>{item}</Text>
      </TouchableOpacity>
    )
   }}
   />
    </View>
  )
}

export default Detalies

const styles = StyleSheet.create({
  container:{flex:1},
  img:{
    width:100,height:100,marginTop:50,alignSelf:"center"
  },
  title:{
    fontSize:20,fontWeight:"700",alignSelf:"center",marginTop:10
  },date:{
    width:"44%",height:40,borderRadius:10,borderWidth:0.5,margin:10,justifyContent:"center",alignItems:"center"
  }
})