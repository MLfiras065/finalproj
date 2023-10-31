import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResImage from './ResImage'
import ReausbleText from './ReausbleText'

const DataCard = ({item,margin,onPress}) => {
  return (
 <TouchableOpacity style={styles.card(margin)}
 onPress={onPress}
 >
<View style={{marginTop:10}}>
    <View style={styles.imgContainer}>
        <ResImage
        source={item.image}
        width={"80%"}
        height={"100%"}
        radius={14}

    />
    </View>
    <View>
        <ReausbleText
           text={item.hotel}
           family={"medium"}
           size={18}
           color={"black"}
        />
            <ReausbleText
           text={item.country}
           family={"medium"}
           size={18}
           color={"black"}
        />
            <ReausbleText
           text={item.rating}
           family={"medium"}
           size={18}
           color={"black"}

        />
        
    </View>
</View >
 </TouchableOpacity>
  )
}

export default DataCard

const styles = StyleSheet.create({
    card:(margin)=>({
        margin:margin,
        width:150,
        height:250,
        borderRadius:16,
        backgroundColor:"white"
    }),
    imgContainer:{
        alignItems:"center",
        marginTop:10,
        height:150
    }
})