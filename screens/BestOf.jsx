import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReausbleText from '../components/ReausbleText'
import { Feather } from '@expo/vector-icons'
import DataCard from '../components/DataCard'
import { useNavigation } from '@react-navigation/native'

const BestOf = () => {
    const navigation = useNavigation()
    const hotels = [
        {
            id:1,
          hotel: "Parishil",
          country: "France",
          review: "The City of Love, known for its iconic Eiffel Tower, Louvre Museum, and exquisite cuisine.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"5"
        },
        {
            id:2,
          hotel: "Toksyo",
          country: "Japan",
          review: "A bustling metropolis with a mix of modern and traditional culture, historic temples, and neon lights.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"1"
        },
        {
            id:3,
          hotel: "New York sCity",
          country: "United States",
          review: "The Big Apple, famous for its skyscrapers, Central Park, Broadway shows, and diverse neighborhoods.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg"
        ,
        rating:"2"
        },
        {
            id:4,
          hotel: "Romess",
          country: "Italy",
          review: "A city steeped in history, home to the Colosseum, Roman Forum, and delectable Italian cuisine.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"3"
        },
        {
            id:5,
          hotel: "Rio de Janessiro",
          country: "Brazil",
          review: "Known for its vibrant Carnival, stunning beaches, and the iconic Christ the Redeemer statue.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"6"
        },
        
      ];
  return (
    <View>
    <View style={[styles.row,{paddingTop:20}]}>
    <ReausbleText
     text={"bestOf"}
     family={"medium"}
     size={22}
     color={"gray"}
     />
     <TouchableOpacity onPress={()=>{navigation.navigate('List')}}>
       <Feather name='list' size={20}/>
       </TouchableOpacity> 
    </View>
    <FlatList 
    data={hotels}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{columnGap:5}}   
    keyExtractor={(item)=> item.id.toString()}
    renderItem={({item})=>(
<DataCard item={item} margin={10} 
 onPress={()=>navigation.navigate('DeataliesList')}
 />
    )}
    />
    </View>
   
  )
}

export default BestOf

const styles = StyleSheet.create({
    // container:{
    //     paddingTop:30
    // },
    row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingBottom:20
    },
})