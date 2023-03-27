import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "react-navigation/native";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
