import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen.js";

const App = () => {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
