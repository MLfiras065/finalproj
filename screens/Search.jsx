import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import ReausbleTile from '../components/ReausbleTile'

const Search = ({navigation}) => {
  const [search,setSearch]=useState("")
  const [searchResult,setSearchResult]=useState([])
  const searchData=[ {
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
},]
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.search}>
<View style={styles.searchWrap}>
  <TextInput
  style={styles.input}
  value={search}
  onChange={()=>setSearch}
  placeholder='search...'
  />
</View>
<TouchableOpacity style={styles.serbtn}>
<Feather
name='search'
size={26}
/>
</TouchableOpacity>
     </View>
     {searchData.length===0 ?(<Image 
     source={require('../assets/audit-investigation-searching-spying.jpg')}
     style={styles.serchImg}
     />):(<FlatList
     data={searchData}
     keyExtractor={(searchData)=>{return (searchData.id.toString())}}
     renderItem={({item})=>(
     <View style={styles.tile}>
        <ReausbleTile
      item={item}
      onPress={()=>navigation.navigate('Detalies',item.id)}
      />
     </View>
    
     )}
     />)}
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:20,
    marginTop:35
    
},search:{
  flexDirection:"row",
  justifyContent:"center"
  ,alignContent:"center",
  marginHorizontal:19,
  borderColor:"blue",
  borderWidth:1,
  borderRadius:17,
  marginVertical:14,
  height:50
},input:{
  fontFamily:"regular",
  height:"100%",
  width:"100%",
  paddingHorizontal:50
},
searchWrap:{
  flex:1,
  marginRight:12,
  borderRadius:10
},serbtn:{
  width:50,
  height:"100%",
borderRadius:10,
justifyContent:"center",
alignItems:"center",
backgroundColor:"blue"
},serchImg:{
  resizeMode:"contain",
  width:"100%",
  height:200,
  paddingHorizontal:20
},tile:{
  marginHorizontal:12,
  marginBottom:10,
}
})