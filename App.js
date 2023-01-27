import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Context } from "./Context";
//import HomeScreen from './screens/HomeScreen';
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <Context style={styles.container}>
      <StatusBar style="auto" />
      <StackNavigator />
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
