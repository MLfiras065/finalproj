import {
    Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,

} from "react-native";
import axios from 'axios';
import React, { useState,useLayoutEffect, useEffect } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import EmojiSelector from "react-native-emoji-selector";
import  UserProvider,{useUser}from '../components/Context';

const ChatMessage = ({navigation}) => {
  const { user } = useUser();
  const userid = user.userId
  const [socket, setSocket] = useState(null);

    const [messageText, setMessageText] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const emojiSelec = () => {
    setShowEmoji(!showEmoji);
  };
  const getMessage=()=> {
    
    axios.get(`${APP_API_URL}/message/getm/${userid}/${22}`).then((res)=>{
        setChatMessages(res.data)
        console.log("res=>",res.data);
    }).catch((err)=>{console.log(err)
    })
}

const addsMessage=(content)=>{
    console.log(socket,"socket");
    socket.emit("get-users", content)
    let x=socket.emit('get-users',content)
    console.log("x=>",x);
axios.post(`${APP_API_URL}/message/postMsg/${userid}/${param}`,{
content:content,
})
.then((res)=>{
    setMessageText(res.data)

})
.catch((err)=>{
console.log(err);
})
}
const handleAdd=()=>{
    addsMessage(content)
}

const handleNewMessage = () => {
    const hour =
        new Date().getHours() < 10
            ? `0${new Date().getHours()}`
            : `${new Date().getHours()}`;

    const mins =
        new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : `${new Date().getMinutes()}`;

    console.log({
        message,
    
        timestamp: { hour, mins },
    });
};






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
  };
}, []);


useEffect(() => {
  getMessage();
}, [socket, getMessage]);

console.log("chatmessa",messageText)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10}}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJuRqnBBee7eBC3cVVia3XEl95Lmqsli_kg&usqp=CAU"
              }}
              style={{ width: 30, height: 30, borderRadius: 15, resizeMode: "cover" }}
            />
            <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold" }}>
              myname
            </Text>
          </View>
        </View>
      ),
    });
  }, []);
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F0F0F0" }}
      behavior={Platform.OS === "ios" ? "position" : null} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
       
      <ScrollView>
      {msg.map((item,index)=>{
        return (
            <View
            key={index}
            style={[
              {
                padding: 8,
                borderRadius: 7,
                maxWidth: "60%",
              },
              item.id === 6 ? {
                alignSelf: "flex-end",
              }
              :{
                alignSelf:"flex-start"
              }
            ]}
          >
            <Text>

           {item.messa}
            </Text>
          </View>
        )
      })}
            </ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
                backgroundColor: "white",
            }}
          >
            <Entypo
              onPress={() => {
                emojiSelec;
              }}
              name="emoji-happy"
              size={24}
              color={"black"}
            />
            <TextInput
              value={message}
              onChangeText={(text) => {
                setMessage(text);
              }}
              placeholder="typeyour message"
              style={{
                
                    flex: 1,
                    height: 40,
                    borderWidth: 1,
                    borderColor: "#dddddd",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    marginLeft: 10,
                    marginBottom: 0
              }}
            />
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 20,
                marginLeft: 10,
              }}
              onPress={handleNewMessage}
            >
              <Text>send</Text>
            </TouchableOpacity>
          </View>
        </View>
      {showEmoji && (
        <EmojiSelector
          onEmojiSelected={(emoji) => {
            setMessage((prevmesg) => prevmesg + emoji);
          }}
          style={{ height: 300 }}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({});
