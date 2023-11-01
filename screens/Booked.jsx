import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {  useRoute} from "@react-navigation/native";
import Header from '../components/Header';
import ReausbleText from '../components/ReausbleText';
import ResImage from '../components/ResImage';
import Rating from '../components/Rating';
import Counter from '../components/Counter';

const Booked = ({navigation}) => {
    const router=useRoute()
    const {item}=router.params
    console.log("my item=>",item);
  return (
    <View>
       <View>
        <Header
          title={"Booked"}
          color={"white"}
          onPress={() => navigation.goBack()}
        
        />
      </View>
<View style={{marginHorizontal:20,marginTop:90}}>
    <View style={{backgroundColor:"white",borderRadius:16}}>
        <ResImage
        source={item.image}
        width={"100%"}
        height={200}
        radius={16}
        />
    <View style={{marginHorizontal:10}}>
<View style={styles.rowWithSpace}>
<ReausbleText
text={item.namee}
family={"medium"}
size={12}
color={"black"}
/>
</View>
        <View style={[styles.row,{marginRight:12}]}>
<ReausbleText
text={item.review}
family={"medium"}
size={12}
color={"gray"}
/>
<Rating
rating={item.rating}
/>
        </View>
        <ReausbleText
text={item.country}
family={"medium"}
size={12}
color={"gray"}
/>
<View style={{borderWidth:0.5,borderColor:"gray",marginVertical:14,}}>

</View>
<ReausbleText style={{marginTop:30}}
text={"requirment"}
family={"medium"}
size={12}
color={"gray"}
/>
<View style={styles.rowWithSpace}></View>
<ReausbleText style={{marginTop:10}}
text={"number"}
family={"medium"}
size={12}
color={"gray"}
/>
<Counter/>

      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("Sucess")}
       style={styles.btnstyle}>
      <Text style={styles.btntext}>book now </Text>
    </TouchableOpacity>
    </View>
</View>
    </View>
  )
}

export default Booked

const styles = StyleSheet.create({
    rowWithSpace:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
    ,row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    btntext: {
        fontFamily: "medium", 
        fontSize: 20,
        color: "white",
        textTransform: "uppercase", 
        textAlign: "center", 
      },
    btnstyle: {
        width: "100%",
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        height:60,
        borderRadius: 17, 
        borderWidth: 1,
        borderColor: "black",
      }
})