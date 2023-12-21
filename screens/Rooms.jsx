import { Image,TouchableOpacity,StyleSheet, Text, View } from "react-native";
import React,{useEffect} from "react";
import {  useNavigation} from "@react-navigation/native";
const Rooms = ({ item }) => {
    const navigation=useNavigation()
    // const navigation = useNavigation();
    console.log("testitem",item);
   
    const handleNavigation = () => {
        navigation.navigate("chatMessage", {
            userid: item.theFollowedUserid,
            
        });
    };
    const handleCreateRoom = () => {
        socket.emit("createRoom", "test");
    };
   
    let socket;
    console.log(socket, "socketttttt");
    
    useEffect(() => {
      try {
        socket = io("http://192.168.1.12:4000");
        console.log("socket=>", socket);
      } catch (error) {
        console.log(error);
      }
      console.log('hi');
    }, []);
    
  return (
    <View>

    <TouchableOpacity style={styles.container}
onPress={()=>{handleCreateRoom(),handleNavigation()}}
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
