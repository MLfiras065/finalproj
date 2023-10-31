import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReausbleText from './ReausbleText'
import ResImage from './ResImage'
import {useNavigation} from "@react-navigation/native"
const Country = ({item}) => {
    const navigation=useNavigation()
  return (
  <TouchableOpacity  
  onPress={()=>navigation.navigate('CategoryDetails',item)}
  style={{marginTop:6}}>
    <View>
        <ResImage  source={item.image}
        width={85}
        height={85}
        bordeRadius={20}
        />
    <ReausbleText 
      text={item.name}
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