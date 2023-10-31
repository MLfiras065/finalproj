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
const countries = [
    {
      id:555,
      name: "Italy",
      reasons: "Rich historyBeautiful landscapesIconic landmarks",
      desc: "Diverse wildlifeFriendly locals hjjjjjjjjjl",
      image: "https://c0.wallpaperflare.com/preview/84/359/653/arch-architectural-architecture-art.jpg",
      populare:{
        id: 64,
        reasoqns: "Modeqrn and World-class technology",
        dqesc: "Diversqqe wildlifeFrienssdly locals hjjjjjjjjjl",
    }
    },
    {
      id: 66,
      name: "Japan",
      reasons: "Modern and World-class technology",
      desc: "Diverse wildlifeFriendly locals hjjjjjjjjjl",
      image: "https://c0.wallpaperflare.com/preview/117/565/297/japan-%E6%B8%8B%E8%B0%B7%E5%8C%BA-shibuya-crossing.jpg",
    populare:{
        id: 4,
        reasoqns: "Modern and World-class technology",
        dqesc: "Diverse wildlifeFrienssdly locals hjjjjjjjjjl",
    }
    },
    {
      id: 774,
      name: "Australia",
      reasons: "Diverse wildlifeFriendly locals",
      desc: "Diverse wildlifeFriendly locals hjjjjjjjjjl",
      image: "https://c0.wallpaperflare.com/preview/476/345/212/grey-concrete-bridge-near-body-of-water.jpg",
      populare:{
        id: 3,
        reasoqns: "Modern and World-cuuulass technology",
        dqesc: "Diverse wildlifeFrienssdly locals hjjjjjjjjjl",
    }
    },
 
  ];
 
return (
  
      <ScrollView>
        <View>
            <ResImage
            source={countries.image}
            width={"100"}
            height={350}
            radius={30}
/>
<Header
title={countries.name} color={"white"} icon={"search1"}
onPress={()=>navigation.goBack()}
// onPress1={()=>navigation.navigate("Search")}
/>
        </View>
        <View style={styles.desc}>
        <ReausbleText
    text={countries.reasons}
    family={"medium"}
    size={22}
    color={"black"}

    />
    <DescText
    text={countries.desc}
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
<Category data={countries.populare} />
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