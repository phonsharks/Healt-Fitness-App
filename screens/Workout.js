import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Workout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Image
          style={{ width: "100%", height: 200, marginTop: 25 }}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          name="arrow-back"
          size={30}
          color="white"
          style={{ position: "absolute", top: 50, left: 10 }}
          /* Birden fazla method kullanılacağı zaman {} içinde yazmakta fayda var */
          onPress={() => {
            navigation.goBack();
          }}
        />

        {/* Burada FitnessCards dosyasında yapılan atamayı burada kullandım.[excersise] */}

        {route.params.excersise.map((item, index) => (
          /* Burada view etiketi ile presseble değişimi gerçekleştireceğim duruma bakacağım. */
          /* excersize Parametresinin içinde dolanmaya başlamaktayız. */

          <Pressable
            key={index}
            /* varsayılan olarak flexDİrection column değerini almaktadır */
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ width: 100, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ paddingLeft: 40 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 22, color: "gray" }}>x{item.sets}</Text>
            </View>

            {/* Dizi ekleme işlemmi olma yada olmama durumuna göre 1-0 döndürme işlemi yapmaya yaramaktadır. */}
            {completed.includes(item.name) ? (
              <AntDesign
                name="checkcircle"
                size={24}
                color="green"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            ) : (
              <Entypo
                name="circle-with-cross"
                size={24}
                color="red"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            )}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        style={{
          backgroundColor: "blue",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 10,
          borderRadius: 10,
          width: 200,
        }}
        onPress={() => {
          navigation.navigate("FitScreen", {
            /* Artık FitScreen ekranında route olayını yapıyorken excersises adı ile çağırma yapacağım */
            excersise: route.params.excersise,
          });
          setCompleted([]);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default Workout;

const styles = StyleSheet.create({});
