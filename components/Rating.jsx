import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ReausbleText from './ReausbleText'
const Rating = ({rating}) => {
  return (
    <View style={styles.row}>
      <MaterialCommunityIcons
      name='star'
      size={20}
      color={"#FD9942"}
      
      />
<ReausbleText
   text={rating}
   family={"medium"}
   size={12}
   color={"gray"}
/>
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:12
    },

})