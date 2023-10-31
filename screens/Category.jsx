import { FlatList, View } from 'react-native'
import React from 'react'
import ReausbleTile from '../components/ReausbleTile'
import {  useNavigation} from "@react-navigation/native";
const Category = ({data}) => {
    const navigation=useNavigation()
  return (
   <FlatList
   data={data}
   keyExtractor={({data})=>data.id.toString()}
   scrollEnabled={false}
   showsVerticalScrollIndicator={false}
   renderItem={({item})=>(
   <View style={{marginBottom:10}}>
   <ReausbleTile item={item} onPress={navigation.navigate('List',item.id)}/>

   </View>
   
   )}
   />
  )
}

export default Category

