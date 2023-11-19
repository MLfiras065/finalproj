import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import ReausbleTile from "../components/ReausbleTile";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { APP_API_URL } from "../env";
const Category = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const { item } = route.params || {};
  const getComm = () => {
    axios
      .get(`${APP_API_URL}/comm/${item.id}`)
      .then((res) => {
        setComment(res.data);
        setContent(res.data.content);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getComm();
  }, [comment]);
  return (
    <FlatList
      data={comment}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReausbleTile
            item={item}
            onPress={navigation.navigate("List", { item: item })}
          />
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate({
                name: "CategoryDetails",

                params: { item: item.id },
              })
            }
          >
            <Text>Comment</Text>
          </TouchableOpacity> */}
        </View>
      )}
    />
  );
};

export default Category;
