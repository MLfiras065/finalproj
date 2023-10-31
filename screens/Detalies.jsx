import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useRoute}from "@react-navigation/native"

const Detalies = () => {
  const route=useRoute()
  const id=route.params
console.log(id);
    return (
    <View>
      <Text>Detalies</Text>
    </View>
  )
}

export default Detalies

const styles = StyleSheet.create({})