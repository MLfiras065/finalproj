import { StyleSheet,View, Text, TextInput, Button,Image, ScrollView ,SafeAreaView,TouchableOpacity} from 'react-native'
import React, { useState, useEffect,useContext } from "react";
import {  APP_API_URL } from '../env'
import axios from "axios";
import ReausbleText from '../components/ReausbleText'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Places from '../components/Places'
import Recommondation from './Recommondation'
import BestOf from './BestOf'
import Modal from 'react-native-modal'
import { Entypo } from '@expo/vector-icons'; 
import * as ImagePicker from "expo-image-picker";
import  UserProvider,{useUser}from '../components/Context';
const Home = () => {
  const { user } = useUser();
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [post,setPost] = useState([]);
  
  const userId = user.userId
console.log("userid", userId);  
console.log("posts=>",post);
  const getPost = () => {

    axios
      .get(`${APP_API_URL}/post/get`)
      .then((res) => {
       
        setPost(res.data);
        console.log("res=>",res.data);
      })
      .catch((err) => {
        console.log("errmsg",err);
      });
  };
  const handleNewPost = (newPost) => {
    setPost([...post, newPost]);
  };
  const handleAdd = async () => {
    const newPost = await addPost(postText, postImage);
    handleNewPost(newPost);
    navigation.navigate('Home');
  };
  useEffect(() => {
    getPost();
  }, []);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false)
  };
    const navigation = useNavigation()
    const addPost = (postText,postImage) => {
      axios
        .post(`${APP_API_URL}/post/addpost/${userId}`, {
          postText:postText,
          postImage:postImage,
        })
        .then((res) => {
          console.log("post added succesfuly", res.data);
        return  res.data
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  console.log(postImage,"test");
      setPostImage(result);
  
      if (!result.canceled) {
        setPostImage(result.assets[0].uri);
      }
    };
    const cloudinaryUpload = (photo) => {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "ogcodes");
      data.append("cloud_name", "ogcodes");
      fetch("https://api.cloudinary.com/v1_1/dzonlv8oi/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPostImage(data.secure_url);
        })
        .catch((err) => {
          Alert.alert("An Error Occured While Uploading");
        });
    };
    return (
      <UserProvider>
    <SafeAreaView style={styles.container}>
      <View>
        
        <View style={ styles.rowWithSpace}>
      <ReausbleText
      text={"hey   User"}
      family={"medium"}
      size={15}
      color={"gray"}
      />
      <TouchableOpacity style={styles.box}
      onPress={()=>navigation.navigate("Search")}
      >
<AntDesign 
name='search1'
size={24}
/>
</TouchableOpacity>
   </View>
  <ReausbleText
      text={"hey countres "}
      family={"medium"}
      size={22}
      color={"gray"}
      />
        </View>
      <Places  post={post} />
      <Recommondation   />
      
      
            <BestOf/>
            <TouchableOpacity
        style={styles.bottomIconContainer}
        onPress={toggleBottomSheet}
      >
        <AntDesign name="caretdown" size={24} color="white" />
      </TouchableOpacity>
            <Modal
        isVisible={isBottomSheetVisible}
        onBackdropPress={closeBottomSheet}
        // backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.bottomSheet}
      >
      
        <View style={styles.bottomSheetContent}>
          
          <Text>add yor post.</Text>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text>Close</Text>
          </TouchableOpacity>
          <ScrollView>
          <View style={styles.wrapper}>
             <View>
          <View style={styles.profimges}>
               <Entypo name="images" size={24} color="black"  onPress={()=>pickImage()}/>
        {postImage && (
          <Image
          source={{ uri: post.postImage }}
          style={{ width: 200, height: 200 }}
          />
          )}
      </View>
      <TextInput
        placeholder="Image"
        onChangeText={(e) => setPostImage(e)}
      />
      <Text style={styles.label}>Text</Text>
      <View style={styles.inputWrapper(Text ? 'blue' : 'gray')}>

      <TextInput
        value={post.postText}
        onChangeText={(text) => setPostText(text)}
        placeholder="Add text..."
        />

             </View>
      <View  style={{marginTop:30}}>
             <Button title="Add" onPress={()=>handleAdd()}
              style={{marginTop:20,borderRadius:12,borderWidth:1}} />
             </View>
             </View>
             </View>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
    </UserProvider>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        marginTop:35
        
    },rowWithSpace:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },box:{
        backgroundColor:"white",
        // position:"relative",
        width:35,
        height:35,
        borderRadius:18,
        alignItems:"center",
        justifyContent:"center"
    },  bottomIconContainer: {
      position: 'absolute',
      bottom: 20, 
      left: '50%',
      justifyContent:"flex-end",
      transform: [{ translateX: -12 }],
      borderRadius:12,borderColor:"green",backgroundColor:"green"
    }, inputWrapper:(borderColor)=>(
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
     },profimges:{
       resizeMode:"cover",
       width:100,
       height:100,
       borderColor:"white",
       borderWidth:2,
       borderRadius:90,
      
   
   },
})