import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import ReausbleTile from '../components/ReausbleTile';

const Booking = () => {
    const navigation = useNavigation()
    const booking = [
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
  return (
    <SafeAreaView>
   <View>
<Header  title={"recomendation"} color={"white"} 
onPress={()=>navigation.goBack()}

onPress1={()=>navigation.navigate("Search")}

/>
   </View>
    <FlatList  
    data={booking}
    showsVerticalScrollIndicator={false}
    keyExtractor={({booking})=>booking.id}
    renderItem={({item})=>{
        <View style={{marginHorizontal:20,marginBottom:8}}>
<view style={{color:"white",borderRadius:12,marginBottom:10}}>

            <ReausbleTile item={item}/>
<TouchableOpacity styl={{margin:10,alignItems:"center"}}
onPress={()=>navigation.navigate('')}
>
    <Text>selectRoom</Text>
</TouchableOpacity>
</view>
        </View>
    }}
    />
    </SafeAreaView>
  )
}

export default Booking

const styles = StyleSheet.create({
    container:{
        height:100
    }
})