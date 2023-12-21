import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import {useNavigation} from "@react-navigation/native"
import ReausbleText from '../components/ReausbleText'
import { Feather } from '@expo/vector-icons'
import ReausbleTile from '../components/ReausbleTile'

const Recommondation = () => {
    const recommended = [
        {
            id:1,
          namee: "Paris",
          country: "France",
          review: "The City of Love, known for its iconic Eiffel Tower, Louvre Museum, and exquisite cuisine.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"5"
        },
        {
            id:2,
          namee: "Tokyo",
          country: "Japan",
          review: "A bustling metropolis with a mix of modern and traditional culture, historic temples, and neon lights.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"1"
        },
        {
            id:3,
          namee: "New York City",
          country: "United States",
          review: "The Big Apple, famous for its skyscrapers, Central Park, Broadway shows, and diverse neighborhoods.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg"
        ,
        rating:"2"
        },
        {
            id:4,
          namee: "Rome",
          country: "Italy",
          review: "A city steeped in history, home to the Colosseum, Roman Forum, and delectable Italian cuisine.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"3"
        },
        {
            id:5,
          namee: "Rio de Janeiro",
          country: "Brazil",
          review: "Known for its vibrant Carnival, stunning beaches, and the iconic Christ the Redeemer statue.",
          image: "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
          rating:"6"
        },
        
      ];
      
      
  const navigation=useNavigation()
    return (
    <View style={styles.container}>
     <View style={styles.row}>
     <ReausbleText
      text={"Recomendation"}
      family={"medium"}
      size={22}
      color={"gray"}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('Recomended')}>
        <Feather name='list' size={20}/>
        </TouchableOpacity> 
     </View>
   <FlatList
   
   data={recommended}
   horizontal
   keyExtractor={(item)=> item.id.toString()}
   contentContainerStyle={{columnGap:7}}
   showsHorizontalScrollIndicator={false}
   renderItem={({item})=>(
 <ReausbleTile

 item={item}
 onPress={()=>{navigation.navigate('Detalies',item._id)}}
 />
   )}
   />
    </View>
  )
}

export default Recommondation

const styles = StyleSheet.create({
    container:{
        paddingTop:30
    },row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingBottom:20
    },
})