import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native"
import ResImage from '../components/ResImage';
import Header from '../components/Header';
import DescText from '../components/DescText';
import { Feather } from '@expo/vector-icons';
import ReausbleText from '../components/ReausbleText';
import Category from './Category';


const CategoryDetails = ({navigation,onpress,populare}) => {
const route=useRoute()
const {item}=route.params
console.log("catitem",item);

 
return (
  
      <ScrollView>
        <View>
            <ResImage
            source={item.image}
            width={"100"}
            height={350}
            radius={30}
/>
<Header
title={item.name} color={"white"} icon={"search1"}
onPress={()=>navigation.goBack()}
// onPress1={()=>navigation.navigate("Search")}
/>
        </View>
        <View style={styles.desc}>
        <ReausbleText
    text={item.reasons}
    family={"medium"}
    size={22}
    color={"black"}

    />
    <DescText
    text={item.desc}
    lines={3}
    
    />
        <View style={{alignContent:"center"}}>
<View style={styles.row} >
<ReausbleText
    text={"popular "}
    family={"medium"}
    size={22}
    color={"black"}

    />
    <TouchableOpacity
    onPress={()=>{}}
    >
        <Feather name='list'
        size={20}/>
    </TouchableOpacity>

</View>
<Category data={item.populare} />
      <TouchableOpacity onPress={()=>navigation.navigate("ListSearch",{ populare: countries.populare })} style={styles.btnstyle}>
      <Text style={styles.btntext}>hotels</Text>
    </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
 
  )
}

export default CategoryDetails

const styles = StyleSheet.create({
    desc:{
        marginHorizontal:20,
        paddingTop:20
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    btntext: {
        fontFamily: "medium", 
        fontSize: 20,
        color: "white",
        textTransform: "uppercase", 
        textAlign: "center", 
      },
    btnstyle: {
        width: 350,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        height:60,
        borderRadius: 17, 
        borderWidth: 1,
        borderColor: "black",
      }
})