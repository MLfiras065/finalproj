import { FlatList, View } from 'react-native'
import React from 'react'
import ReausbleTile from '../components/ReausbleTile'
import {  useNavigation} from "@react-navigation/native";
const Category = () => {
    const navigation=useNavigation()
    const countries = [
      {
        id:555,
        name: "Italy",
        reasons: "Rich historyBeautiful landscapesIconic landmarks",
        desc: "Diverse wildlifeFriendly locals hjjjjjjjjjl",
        image: "https://c0.wallpaperflare.com/preview/84/359/653/arch-architectural-architecture-art.jpg",
        populare:{
          id: 64,
          reasoqns: "Modeqrn and World-class technology",
          dqesc: "Diversqqe wildlifeFrienssdly locals hjjjjjjjjjl",
      }
      },
      {
        id: 66,
        name: "Japan",
        reasons: "Modern and World-class technology",
        desc: "Diverse wildlifeFriendly locals hjjjjjjjjjl",
        image: "https://c0.wallpaperflare.com/preview/117/565/297/japan-%E6%B8%8B%E8%B0%B7%E5%8C%BA-shibuya-crossing.jpg",
      populare:{
          id: 4,
          reasoqns: "Modern and World-class technology",
          dqesc: "Diverse wildlifeFrienssdly locals hjjjjjjjjjl",
      }
      },
      {
        id: 774,
        name: "Australia",
        reasons: "Diverse wildlifeFriendly locals",
        desc: "Diverse wildlifeFriendly locals hjjjjjjjjjl",
        image: "https://c0.wallpaperflare.com/preview/476/345/212/grey-concrete-bridge-near-body-of-water.jpg",
        populare:{
          id: 3,
          reasoqns: "Modern and World-cuuulass technology",
          dqesc: "Diverse wildlifeFrienssdly locals hjjjjjjjjjl",
      }
      },
   
    ];
  return (
   <FlatList
   data={countries}
   keyExtractor={(item)=>item.id.toString()}
   scrollEnabled={false}
   showsVerticalScrollIndicator={false}
   renderItem={({item})=>(
   <View style={{marginBottom:10}}>
   <ReausbleTile item={item} onPress={navigation.navigate('List',{item})}/>

   </View>
   
   )}
   />
  )
}

export default Category

