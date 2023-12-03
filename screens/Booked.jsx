import { StyleSheet, Text, View,TouchableOpacity ,Alert} from 'react-native'
import React,{useEffect, useState} from 'react'
import {  useRoute} from "@react-navigation/native";
import Header from '../components/Header';
import ReausbleText from '../components/ReausbleText';
import ResImage from '../components/ResImage';
import Rating from '../components/Rating';
import Counter from '../components/Counter';
import  UserProvider,{useUser}from '../components/Context';
import { useStripe } from '@stripe/stripe-react-native';
import { APP_API_URL } from '../env';
import axios from 'axios';

const Booked = ({navigation}) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { user } = useUser();
    const router=useRoute()
    const [amount,setAmount]=useState(0)
    const [loading, setLoading] = useState(false);
    const userId = user.userId
    const {item}=router.params
    console.log("my item=>",item);
 
    
  const fetchPaymentSheetParams = async () => {
    const response = await axios.post(`${APP_API_URL}/payment/${amount}` ,setAmount(amount));
    const { paymentIntent } = response.data
    const initResponse = initPaymentSheet({
      merchantDisplayName: "finalproj",
      paymentIntentClientSecret: paymentIntent,
    });
return initResponse
   
  };
  const openPaymentSheet = async () => {
    try {
      const { error } = await presentPaymentSheet();
  
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
        console.error('Error presenting payment sheet:', error);
      } else {
        
        axios.get(`${APP_API_URL}/user/payed/${userId}`)
          .then(() => {
            Alert.alert(
              "Payment Successful",
              "Your payment has been processed successfully!"
            );
            navigation.navigate("Sucess");
          })
          .catch((error) => {
            console.error('Error processing payment:', error);
          });
      }
    } catch (error) {
      console.error('Error presenting payment sheet:', error);
      
    }
  };
    useEffect(() => {
    
    fetchPaymentSheetParams()
  }, []);
  return (
    <UserProvider>

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
      onPress={()=>{openPaymentSheet()}}
      style={styles.btnstyle}>
      <Text style={styles.btntext}>book now </Text>
    </TouchableOpacity>
    </View>
</View>
    </View>
         </UserProvider>
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