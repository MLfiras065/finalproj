import React from 'react'
import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import Country from './Country';

const Places = ({post}) => {
 
  return (
    <View  style={{marginTop:20}}>
    <VirtualizedList
      data={post}
      horizontal
      keyExtractor={(item) => item.id} 
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