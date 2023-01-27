import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Workout from "./screens/Workout";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Workout"
          component={Workout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FitScreen"
          component={FitScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestScreen"
          component={RestScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
