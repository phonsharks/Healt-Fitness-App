import { ScrollView, StyleSheet, Text, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersise;
  const current = excersise[index];
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);
  return (
    <ScrollView>
      <Image
        style={{ width: "100%", height: 350, marginTop: 20 }}
        source={{ uri: current.image }}
      />
      <Ionicons
        name="arrow-back"
        size={30}
        color="black"
        style={{ position: "absolute", top: 30, left: 8 }}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        x{current.sets}
      </Text>
      {/* Dizinin sonuna gelinip gelinmediğine yönelik inceleme */}
      {index + 1 >= excersise.length ? (
        <Pressable
          /* onPress İle birden fazla işlev yapma durumu olduğundan dolayı {} ile destekleme yaptım. */
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 20,
            width: 200,
            padding: 10,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          /* onPress İle birden fazla işlev yapma durumu olduğundan dolayı {} ile destekleme yaptım. */
          onPress={() => {
            navigation.navigate("RestScreen");
            /* Burada ... durumunu yeni ekleme ve eklemeden önce sıfırlama için kullandım */
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            //zaman durumunu kaldırmış bulunmaktayım
            setTimeout(() => {
              setIndex(index + 1);
            });
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 20,
            width: 200,
            padding: 10,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
          paddingTop: 20,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("RestScreen");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 15,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            PREV
          </Text>
        </Pressable>

        {/* Dizinin sonuna gelinip gelinmediğine yönelik inceleme */}
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 15,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("RestScreen");

              //zaman durumunu kaldırmış bulunmaktayım
              setTimeout(() => {
                setIndex(index + 1);
              });
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 15,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </ScrollView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
