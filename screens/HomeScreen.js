import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#CD853F",
        width: "100%",
        height: 300,
        padding: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Home Workout
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            0
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>WORKOUTS</Text>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            0
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>KCAL</Text>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            0
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>MINUTES</Text>
        </View>
      </View>
      <View
        style={{
          /* RN flexDirection verisi girilmediği zaman varsayılan olarak row tanımlamaktadır */
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Image
          style={{
            width: "90%",
            height: 120,
            marginTop: 20,
            borderRadius: 20,
          }}
          source={{
            uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
          }}
        />
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
