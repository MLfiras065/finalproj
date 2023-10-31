import { View, Text ,SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
const OnBording = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={
        {
            flex:1,
            backgroundColor:"white"

        }
    }>
        <StatusBar hidden={true}/>
    <Image source={require("../assets/road.jpg")}
    resizeMode='cover'
    style ={{
        height:"100%",
        width:"auto",
        marginBottom:200
    
    }}/>
     <Text style={{
        fontSize:24,
        marginTop:200,
       textAlign:"center",
       position:"absolute"
     }}>
        Escape the ordinary life
     </Text>
     <Text style={{
   
         marginVertical:12  ,
         marginTop:300,
         color:"black", 
         textAlign:'center',
         position:"absolute"
     }}>
        Discover great experience around you and make your live  intersting 
     </Text>
     <TouchableOpacity 
     onPress={()=>navigation.navigate('Navigation')}
     style={{
       fontSize:20,
       marginVertical:12  ,
       marginTop:400,
       color:"black", 
       position:"absolute",
       borderRadius:0  ,flex:3,
       flexDirection:'row',
       marginHorizontal:50,
       justifyContent:'space-around',
       borderColor:"white",
       backgroundColor:"#19A7CE"
   }} >
        <Text >
            register
        </Text>
     </TouchableOpacity>
     <TouchableOpacity style={{
       fontSize:20,
       marginVertical:12  ,
       marginTop:500,
       color:"black", 
       textAlign:'center',
       position:"absolute",
       borderRadius:0,
       borderColor:"red", 
       flex:3,
        flexDirection:'row',
        marginHorizontal:50,
        justifyContent:'space-around',
       backgroundColor:"#19A7CE"
       

   }} >
        <Text >
            login
        </Text>
     </TouchableOpacity>
    
    </SafeAreaView>
  )
}

export default OnBording