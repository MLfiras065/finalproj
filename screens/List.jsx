import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ReausbleTile from '../components/ReausbleTile';

const List = ({navigation}) => {
  
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
    <SafeAreaView style={styles.header}>
    <View style={{height:80}}>
<Header title={"recomendation"} color={"white"}icon={"search1"}
onPress={()=>navigation.goBack()}
onPress1={()=>navigation.navigate("ListSearch")}

/>
    </View>
    <View style={{paddingTop:20}}>
    <FlatList 
  data={hotels}
  keyExtractor={(item) => item.id.toString()} 
  contentContainerStyle={{ columnGap: 3 }}
  renderItem={({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReausbleTile 
        item={item}
        onPress={() => navigation.navigate('DeataliesList',item._id)}
      />
    </View>
  )}
/>
    </View>
    </SafeAreaView>
  )
}

export default List

const styles = StyleSheet.create({
  header:{
    marginHorizontal:20
  }
})