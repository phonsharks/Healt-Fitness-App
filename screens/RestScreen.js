import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const RestScreen = () => {
  const navigation = useNavigation();
  //const route=useRoute();
  /* const değiştirilebilir değişken durumundadır,bundan dolayı let timer tanımlamasında kullanılmıştır. */
  let timer = 0;
  const [timeLeft, settimeLeft] = useState(3);

  const startTime = () => {
    /* setTimeout belirli bir süre içerisinde istenilen durumu yapma fonksiyonu olmaktadır */
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      settimeLeft(timeLeft - 1);
      /* 1000 Rakamı burada geri sayım olurken bekleme süresi olmakta */
    }, 1000);
  };

  /* useEffect addEventListener gibi düşünerek ilerleme almaktayım yani olayın gerçekleştiği durum burası olmakta projem için*/
  useEffect(() => {
    startTime();
    //temizleme durumum
  
  });

  return (
    <ScrollView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 20,
        }}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          textAlign: "center",
          paddingTop: 20,
        }}
      >
        {timeLeft}
      </Text>
    </ScrollView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
