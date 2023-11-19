import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import ResImage from "../components/ResImage";
import Header from "../components/Header";
import DescText from "../components/DescText";
import { Feather } from "@expo/vector-icons";
import ReausbleText from "../components/ReausbleText";
import Category from "./Category";
import { useUser } from "../components/Context";
import axios from "axios";
import { APP_API_URL } from "../env";
const CategoryDetails = ({ navigation, onpress }) => {
  const route = useRoute();
  const { user } = useUser();
  const { item } = route.params || {};
  console.log("catitem", item);

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const usersid = user.userId;

  const addComm = (content, image) => {
    axios
      .post(`${APP_API_URL}/comm/add/${usersid}/${item.id}`, {
        content: content,
        image: image,
      })
      .then((res) => {
        console.log("res", res.data);
        console.log("added");
        // return res.data
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   const handleNewPost = (newPost) => {
  //     setPost([...post, newPost]);
  //   };
  const handleAdd = () => {
    addComm(content, image);
  };

  return (
    <ScrollView>
      <View>
        <ResImage source={item.image} width={"100"} height={350} radius={30} />
        <Header
          title={"test"}
          color={"white"}
          icon={"search1"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.desc}>
        <ReausbleText
          text={item.content}
          family={"medium"}
          size={22}
          color={"black"}
        />
        {/* <DescText
    text={item.desc}
    lines={3}
    
    /> */}
        <View style={{ alignContent: "center" }}>
          <View style={styles.row}>
            <ReausbleText
              text={"popular "}
              family={"medium"}
              size={22}
              color={"black"}
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <Category data={item.populare} />
          <TextInput
            value={content}
            onChangeText={(text) => {
              setContent(text);
            }}
            placeholder="typeyour message"
            style={{
              flex: 1,
              height: 40,
              borderWidth: 1,
              borderColor: "#dddddd",
              borderRadius: 20,
              paddingHorizontal: 10,
              marginLeft: 10,
              marginBottom: 0,
            }}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 20,
              marginLeft: 10,
            }}
            onPress={handleAdd}
          >
            <Text>send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  desc: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    height: 60,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "black",
  },
});
