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


const ChatMessage = ({navigation}) => {
    const msg=[{
        id:1,
        messa:"helllo",
    }]
    const [messageText, setMessageText] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const emojiSelec = () => {
    setShowEmoji(!showEmoji);
  };
  const handleSendMessage = () => {
    if (messageText) {
      const newMessage = {
        text:message,
       
        timestamp: new Date(),
      };

     
      setMessageText([...messageText, newMessage]);

      setMessage('');
    }
  };
  const getMessage = () => {
    setMessageText(msg);
  }
  useEffect(()=>{
    getMessage()
  },[message])
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
              onPress={handleSendMessage}
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
