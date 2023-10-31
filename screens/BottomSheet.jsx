import { SafeAreaView,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'



const BottomSheet = ({visible,close}) => {
   const openHeight=200

 
  return (
    <View style={[styles.container,{ top: visible ? openHeight : '100%' }]}>
<View style={styles.lineContainer}>
    <TouchableOpacity onPress={close}>
        <Text>close</Text>
    </TouchableOpacity>
     <View style={styles.line}>

</View>
     </View>
    </View>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor:"white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    line:{
        width:50,
        height:4,
        backgroundColor:"black",
        borderRadius:50
    },
    lineContainer:{
        alignItems:"center",
        marginVertical:10
    }

})
