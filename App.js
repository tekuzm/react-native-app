import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

// ========== components ==========

import { RegistrationScreen } from "./src/Screens/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/LoginScreen.js";

// ========== App ==========

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadApp = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadApp();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />

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
