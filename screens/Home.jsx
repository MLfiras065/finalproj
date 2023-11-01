import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ReausbleText from '../components/ReausbleText'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Places from '../components/Places'
import Recommondation from './Recommondation'
import BestOf from './BestOf'
import BottomSheet from "../screens/BottomSheet"
const Home = () => {
    const navigation = useNavigation()
    const [open, setOpen] = useState(false);
    const close=()=>{
      setOpen(false)
    }
    const toggleBottomSheet = () => {
      setOpen(!open);
    };
    return (
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
      <Places  />
      <Recommondation  />
      
      
            <BestOf/>
      
            <TouchableOpacity 
            style={styles.bottomIconContainer}
            onPress={()=>setOpen(open)}>
          <Text>open</Text>
        </TouchableOpacity>
        <BottomSheet visible={open} close={() => setOpen(false)} />
    </SafeAreaView>
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
    },
})