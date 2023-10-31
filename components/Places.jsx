import React from 'react'
import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import Country from './Country';

const Places = () => {
    const countries = [
        {
          id: 8,
          name: "Italy",
          reasons: "Rich historyBeautiful landscapesIconic landmarks",
          image: "https://c0.wallpaperflare.com/preview/84/359/653/arch-architectural-architecture-art.jpg",
        },
        {
          id: 29,
          name: "Japan",
          reasons: "Modern and World-class technology",
          image: "https://c0.wallpaperflare.com/preview/117/565/297/japan-%E6%B8%8B%E8%B0%B7%E5%8C%BA-shibuya-crossing.jpg",
        },
        {
          id: 34,
          name: "Australia",
          reasons: "Diverse wildlifeFriendly locals",
          image: "https://c0.wallpaperflare.com/preview/476/345/212/grey-concrete-bridge-near-body-of-water.jpg",
        },
     
      ];
  return (
    <View  style={{marginTop:20}}>
    <VirtualizedList
      data={countries}
      horizontal
      keyExtractor={(item) => item.id.toString()} 
      showsHorizontalScrollIndicator={false}
      getItemCount={(data) => data.length}
      getItem={(data, index) => data[index]}
      renderItem={({ item }) => (
        <View style={{ marginRight: 23 }}>
          <Country item={item}/>
        </View>
      )}
    />
  </View>
  )
}
  
export default Places

const styles = StyleSheet.create({})