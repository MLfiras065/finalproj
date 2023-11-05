import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react' 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopBookings from './TopBookings';
import TopInfo from './TopInfo';
import TopTrips from './TopTrips';
import ResImage from '../components/ResImage';
import Header from '../components/Header';
import ReausbleText from '../components/ReausbleText';
const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
  return (
    <View style={{flex:1}}>
<View style={{backgroundColor:"white"}}>
<View>
    <ResImage
    source={"https://c4.wallpaperflare.com/wallpaper/575/581/148/nature-landscape-fjord-lofoten-islands-wallpaper-preview.jpg"}
    width={"100%"}
    height={300}
    radius={0}
    />
    <Header
    color={"white"}
    
    onPress1={()=>{}}
    icon={"logout"}
    />
<View style={styles.img}>
    <Image 
source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg' }}
   style={styles.profimges}
   />
<View style={styles.name}>
<View style={{alignItems:"center"}}>
<ReausbleText
 text={"one User"}
 family={"medium"}
 size={15}
 color={"gray"}
/>
</View>
</View>
<View style={styles.name}>
<View style={{alignItems:"center"}}>
<ReausbleText
 text={"one Email"}
 family={"medium"}
 size={15}
 color={"gray"}
/>
</View>
</View>
</View>
</View>
</View>
    <Tab.Navigator>
    <Tab.Screen name="Top Bookings" component={TopBookings} />
    <Tab.Screen name="Top Trips" component={TopTrips} />
    <Tab.Screen name="Info" component={TopInfo} />
  </Tab.Navigator>
    </View>
  )
}

export default TopTab

const styles = StyleSheet.create({
    img:{position:"absolute",
    right:0,
    left:0,
    Top:110,
    alignItems:"center",
   
},profimges:{
    resizeMode:"cover",
    width:100,
    height:100,
    borderColor:"white",
    borderWidth:2,
    borderRadius:90,
    marginTop:130,

},
name:{
    backgroundColor:"black",
    padding:5,
    borderRadius:12
}
})