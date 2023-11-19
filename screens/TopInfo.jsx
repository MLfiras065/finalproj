import { StyleSheet, Text, Image, TextInput, Button, View, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const TopInfo = () => {
  
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", email: "", password: "",image:"" }}
        onSubmit={(values) => {handleChange, touched,handleSubmit, values  }}
      >
        {({ handleChange, touched, handleSubmit, values }) => (
          <View style={styles.wrapper}>
            <View>
             <TouchableOpacity>
              <Image
                source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg' }}
                style={[styles.profImages]}
              />
              </TouchableOpacity> 
            </View>
            <View>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputWrapper(touched.email ? 'blue' : 'gray')}>
                <AntDesign name="user" size={20} color="gray" />
                <View style={{ marginLeft: 5 }}>
                  <TextInput
                    onChangeText={handleChange('username')}
                    value={values.username}
                    placeholder="Username"
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
            <View style={{ marginTop: 20 }}>
              <Button title="Update" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default TopInfo

const styles = StyleSheet.create({
  img:{position:"absolute",
  right:0,
  left:0,
  Top:110,
  alignItems:"center",
 
},
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: 'flex-start', // Align content to the top
  },
  profImages: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 90,
    marginTop: 10, // Adjust the marginTop to move the image to the top
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: "white",
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center"
  }),
  wrapper: {
    marginBottom: 20
  },
  label: {
    fontFamily: "regular",
    fontSize: 10,
    marginBottom: 4,
    marginEnd: 4,
    textAlign: "left"
  }
})
