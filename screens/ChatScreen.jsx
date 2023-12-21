import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,FlatList,Pressable } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Rooms from './Rooms'
import {io} from 'socket.io-client';

import axios from 'axios'
import { APP_API_URL } from '../env'


const ChatScreen = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
  
    const socketConnection = io("https://section-bc-climb-pill.trycloudflare.com:4000");
    
    socketConnection.on("connect", () => {
      console.log("Socket connected.");
      setSocket(socketConnection); 
    });
  
  
    return () => {
      if (socketConnection) {
        socketConnection.disconnect();
      }
    }
  
  }, []); 
  const getFreindList=()=>{
      axios.get(`${APP_API_URL}/foll/${3}`).then((res)=>{
  
              const mutualFriends = friends(res.data, userid);
              setRooms(mutualFriends);
      
      }).catch((err)=>{
          console.log(err);
      })
  }
  const friends=(array, userId)=>{
      const user = array.find(user => user.id === userId);
      if (!user) {
        return [];
      }
      const followedByUser = array.filter(item => item.thefollowingUserId === userId);
      const followingUser = array.filter(item => item.theFollowedUserid === userId);
      const mutualFriends = followedByUser.filter(item =>
        followingUser.some(followingItem => followingItem.thefollowingUserId === item.theFollowedUserid)
      );
      return mutualFriends;
    }
    const handleCreateRoom = () => {
      socket.emit("createRoom", "test");
  };
 
  let socket
  console.log(socket,"socketttttt");
useEffect(()=>{
  try {
       socket= io("https://section-bc-climb-pill.trycloudflare.com:4000")
      console.log("socket=>",socket);} 
  catch (error) {
      console.log(error);
  }
console.log('hi')
},[])
  useEffect(()=>{
        getFreindList()
  
      },[])
  return (
    <SafeAreaProvider>
<ScrollView>
<FlatList

                      data={rooms}
                      renderItem={({ item }) =>
                    

                      <Rooms  item={item} />
                   
                      
                  }
                      keyExtractor={(item) => item.id}
                  />
                   <Pressable style={styles.cchat} 
        onPress={()=>{handleCreateRoom(),handleNavigation()}}
        ></Pressable>
</ScrollView>
    </SafeAreaProvider>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"green"
  }
})