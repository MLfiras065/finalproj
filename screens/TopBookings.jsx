import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReausbleTile from '../components/ReausbleTile';

const TopBookings = () => {
  const booked = [
    {
      id: 1,
      namee: "Paris",
      country: "France",
      review:
        "The City of Love, known for its iconic Eiffel Tower, Louvre Museum, and exquisite cuisine.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
      rating: "5",
    },
    {
      id: 2,
      namee: "Tokyo",
      country: "Japan",
      review:
        "A bustling metropolis with a mix of modern and traditional culture, historic temples, and neon lights.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
      rating: "1",
    },
    {
      id: 3,
      namee: "New York City",
      country: "United States",
      review:
        "The Big Apple, famous for its skyscrapers, Central Park, Broadway shows, and diverse neighborhoods.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
      rating: "2",
    },
    {
      id: 4,
      namee: "Rome",
      country: "Italy",
      review:
        "A city steeped in history, home to the Colosseum, Roman Forum, and delectable Italian cuisine.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
      rating: "3",
    },
    {
      id: 5,
      namee: "Rio de Janeiro",
      country: "Brazil",
      review:
        "Known for its vibrant Carnival, stunning beaches, and the iconic Christ the Redeemer statue.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/892/296/60/sea-cliff-bridge-landscape-architecture-trees-wallpaper-preview.jpg",
      rating: "6",
    },
  ];
  return (
    <View style={{margin:20}}>
      <FlatList
      data={booked}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>
(  <View style={{marginTop:6,backgroundColor:"white"}}>
<ReausbleTile item={item}/>

 </View>)
}
      />
    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({
  rowWithSpace:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
}
})