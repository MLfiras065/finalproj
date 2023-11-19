import { StyleSheet,View, Text, TextInput, Button} from 'react-native'
import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {APP_API_URL} from "../env"
import UserProvider,{useUser} from '../components/Context';

const Login = ({navigation}) => {
  const { setUser } = useUser()
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const logIn = async( ) => {

   
      try {
        const res= await axios.post(`${APP_API_URL}/user/log/${email}`, {
        Password:Password
      })
      const userId = res.data.id;
      setUser(userId,res.data.email);
  console.log("userId===>",userId);
        alert("login")
        
console.log("loggedin",res.data.id);

        } catch (err) {
        console.error(err)
      }
     
  };
  
  const handleLogIn = () => {
    logIn();

    navigation.navigate("Home",{screen:"Home"})
   
  };
  return (
    <UserProvider>
    <View style={styles.container}>
    <View style={styles.container}>

    <View style={styles.wrapper}>
    <View>
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputWrapper(email ? 'blue' : 'gray')}>
        <MaterialCommunityIcons
          name="email-outline"
          size={20}
          color={'gray'}
        />
        <View  style={{ marginLeft: 5 }}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
        />
      </View>
</View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrapper(Password ? 'blue' : 'gray')}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={20}
          color={'gray'}
        />
              <View style={{ marginLeft: 5 }}>
                   <TextInput
                     onChangeText={(pass)=>setPassword(pass)}
                     value={Password}
                     placeholder="Password"
                     secureTextEntry
                   />
                 </View>
      </View>

      <View  style={{marginTop:20}}>
             <Button title="Login" onPress={handleLogIn}
              style={{marginTop:20,borderRadius:12,borderWidth:1}} />

             </View>
    </View>
    </View>
    </View>
    </View>
    </UserProvider>
  )
}


export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
backgroundColor:"white"
  },
  inputWrapper:(borderColor)=>(
   { 
    borderColor:borderColor,
      backgroundColor:"white",
      borderWidth:1,
    height:50,
  borderRadius:12,
flexDirection:"row",
paddingHorizontal:15,
alignItems:"center"
}
  ),
  wrapper:{
    marginBottom:20
  },
  label:{
    fontFamily:"regular",
    fontsize:10,
    marginBottom:4,
    marginEnd:4, 
    textAlign:"left"
  }
})