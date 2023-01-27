import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Fitness from "../data/Fitness";
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
/* Verileri bu dosya üzerinden yayıyorum. */

const FitnessCards = () => {
  const fit = Fitness;
  const navigation = useNavigation();
  return (
    <View>
      {fit.map((item, key) => (
        <Pressable
          /* Burada Workout dosyasını hedef gösteme durumumuz bulunmakta. */
          onPress={() =>
            navigation.navigate("Workout", {
              /* Burada belirlenen değişkenler map() ile dolanıp oluşturulan yeni diziden alınan verilerin ataması oluyor. */
              /* Burada belirlenen ve data dosyasından çekilen verileri kullanacağım. */
              image: item.image,
              excersise: item.excersises,
              id: item.id,
              name:item.name,
            })
          }
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 120, borderRadius: 20 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              fontWeight: "bold",
              left: 20,
              top: 20,
              color: "white",
              fontSize: 18,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
