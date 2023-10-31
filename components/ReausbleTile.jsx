import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResImage from './ResImage'
import ReausbleText from './ReausbleText'
import Rating from './Rating'

const ReausbleTile = ({item,onPress}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.container}>
        <View style={styles.rowWithSpace}>
        <ResImage  source={item.image}
        width={85}
        height={85}
        bordeRadius={20}
        />

<View style={{marginTop:13}}>
    <ReausbleText
    text={item.namee}
    family={"medium"}
    size={16}
    color={"black"}

    />
    <View style={{marginTop:13}}>
    <ReausbleText
    text={item.country}
    family={"medium"}
    size={12}
    color={"gray"}

    />
    </View>
    <View style={styles.rowWithSpace}>
        <Rating rating={item.rating}/>
 
    <ReausbleText
    text={`(${item.review})`}
    family={"medium"}
    size={12}
    color={"gray"}

    />
    </View>
</View>
        </View>
    </TouchableOpacity>
  )
}

export default ReausbleTile

const styles = StyleSheet.create({
    rowWithSpace:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    container:{
        padding:10,
        backgroundColor:"white",
        borderRadius:12
    }
})