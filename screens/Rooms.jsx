import { Image,TouchableOpacity,StyleSheet, Text, View } from "react-native";
import React from "react";
import {  useNavigation} from "@react-navigation/native";
const Rooms = ({ item }) => {
    const navigation=useNavigation()
  return (
    <View>

    <TouchableOpacity style={styles.container}
onPress={()=>{navigation.navigate('ChatMessage')}}
    >
      <Image style={styles.img} source={{uri:item.image}} />
      <View>
      <Text >{item.name}</Text>
      <Text >lastmsg</Text>

      </View>
    </TouchableOpacity>
    </View>
  );
};

export default Rooms;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        borderWidth:0.7,
        borderColor:"#D0D0D0",
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0, 
        padding:10   
    },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
//   text: {
//     fontSize:15,
//     fontWeight:500

//   },
});
