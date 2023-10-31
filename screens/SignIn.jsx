import { StyleSheet,View, Text, TextInput, Button} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const SignIn = () => {
  const navigation = useNavigation()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarVisible: false, 
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Formik
      initialValues={{username:"",email:"",password:""}}
    
      onsubmit={(value)=>{}}
      >
          {({ handleChange, touched,handleSubmit, values }) => (
             <View style={styles.wrapper}>
             <View>
               <Text style={styles.label}>Username</Text>
               <View style={styles.inputWrapper(touched.email ? 'blue' : 'gray')}>
               <AntDesign name="user" size={20} color="gray" />
                 <View style={{ marginLeft: 5 }}>
                   <TextInput
                     onChangeText={handleChange('username')}
                     value={values.username}
                     placeholder="username"
                   />
                 </View>
               </View>
             </View>
             <View>
               <Text style={styles.label}>Email</Text>
               <View style={styles.inputWrapper(touched.email ? 'blue' : 'gray')}>
                 <MaterialCommunityIcons
                   name="email-outline"
                   size={20}
                   color={'gray'}
                 />
                 <View style={{ marginLeft: 5 }}>
                   <TextInput
                     onChangeText={handleChange('email')}
                     value={values.email}
                     placeholder="Email"
                   />
                 </View>
               </View>
             </View>
             <Text style={styles.label}>Password</Text>
             <View>
               <View style={styles.inputWrapper(touched.password ? 'blue' : 'gray')}>
                 <MaterialCommunityIcons
                   name="lock-outline"
                   size={20}
                   color={'gray'}
                 />
                 <View style={{ marginLeft: 5 }}>
                   <TextInput
                     onChangeText={handleChange('password')}
                     value={values.password}
                     placeholder="Password"
                     secureTextEntry
                   />
                 </View>
               </View>
             </View>
             <View  style={{marginTop:20}}>
             <Button title="SignUp" onPress={handleSubmit}
              style={{marginTop:20,borderRadius:12,borderWidth:1}} />

             </View>
          </View>
             )}
       
      </Formik>
    </View>
  )
}
  {/* 
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          /> */}
          
          {/* <Button title="Submit" onPress={handleSubmit} /> */}
export default SignIn

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