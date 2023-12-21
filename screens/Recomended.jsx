import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Header from '../components/Header'
import ReausbleTile from '../components/ReausbleTile';

const Recomended = ({navigation}) => {
  
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
  return (
    <SafeAreaView style={styles.header}>
    <View style={{height:80}}>
<Header title={"recomendation"} color={"white"} icon={"search1"}
onPress={()=>navigation.goBack()}
onPress1={()=>navigation.navigate("Search")}

/>
    </View>
    <View style={{paddingTop:20}}>
    <FlatList 
  data={recommended}
  keyExtractor={(recommended) => recommended.id.toString()} 
  contentContainerStyle={{ columnGap: 3 }}
  renderItem={({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReausbleTile 
        item={item}
        onPress={() => navigation.navigate('Detalies',item.id)}
      />
    </View>
  )}
/>
    </View>
    </SafeAreaView>
  )
}

export default Recomended

const styles = StyleSheet.create({
  header:{
    marginHorizontal:20
  }
})