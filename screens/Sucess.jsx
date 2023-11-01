import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ResImage from '../components/ResImage'

const Sucess = () => {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <ResImage
        width={400}
        height={400}
        radius={200}
        source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0GIpKTjwpXb1ZUTvSSJMr8AvvfptCGQt9w&usqp=CAU"}
      />
    </View>
  </View>
)
}

export default Sucess

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
imageContainer: {
  marginTop: '10%',
},
})