import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Login from './Login'
import SignIn from './SignIn'
import ResImage from '../components/ResImage'

const Tab=createMaterialTopTabNavigator()
const AuthTopTab = () => {
  return (
    
    <View style={{flex:1,backgroundColor:"white"}}>
    <ScrollView style={{flex:1,backgroundColor:"white"}} >
    <View style={{marginTop:80}}>
        <ResImage
        source={'https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg'}
        width={"100%"}
        height={300}
        mode={"contain"}
        />
    <Tab.Navigator style={{height:400}}>
    <Tab.Screen  name='Login' component={Login}/>
    <Tab.Screen  name='SignIn' component={SignIn}/>
      </Tab.Navigator>
    </View>

    </ScrollView>
   
    </View>
  )
}

export default AuthTopTab

const styles = StyleSheet.create({})