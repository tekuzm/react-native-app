import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

// ========== components ==========

import { RegistrationScreen } from "./src/Screens/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/LoginScreen.js";

// ========== initial state ==========

const initialState = {
  email: "",
  password: "",
};

// ========== App ==========

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

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
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/img/bg_img.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            {/* <RegistrationScreen /> */}
            <LoginScreen />

            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
