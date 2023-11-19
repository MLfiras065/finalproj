import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ReausbleText from './ReausbleText'
import ResImage from './ResImage'
import {useNavigation} from "@react-navigation/native"
const Country = ({item}) => {
 
    const navigation=useNavigation()
    console.log(item.postImage);
    if (!item || !item.postImage) {
      return (<View>
        <Text>there is no data</Text>
      </View>)
    }
  return (
  <TouchableOpacity  
  onPress={()=>navigation.navigate('CategoryDetails',{item:item})}
  style={{marginTop:6}}>
    <View>
        <ResImage  source={item.postImage}
        width={85}
        height={85}
        bordeRadius={20}
        />
    <ReausbleText 
      text={item.postText}
      family={"medium"}
      size={22}
      color={"black"}
      align={"center"}
      />
    </View>
  </TouchableOpacity>
  )
}

export default Country

const styles = StyleSheet.create({})