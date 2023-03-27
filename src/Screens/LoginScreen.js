import { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

// ========== components ==========

import { Button } from "../components/Button/Button";

// ========== Sign up ==========

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/bg_img.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 45,
              }}
            >
              <Text style={styles.signupHeader}>Log In</Text>
              <View style={styles.inputsWrap}>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                ></TextInput>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                ></TextInput>
              </View>
              <Button title="LOG IN" onPress={hideKeyboard} />
              <View style={styles.additionalInfoWrap}>
                <Text>
                  Do not have an account?{" "}
                  <TouchableOpacity>
                    <Text style={styles.login}>SIGN UP</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  signupHeader: {
    fontFamily: "Roboto-Regular",
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
  },
  inputsWrap: {
    gap: 16,
    marginBottom: 43,
  },
  input: {
    fontFamily: "Roboto-Regular",
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  additionalInfoWrap: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    color: "#1B4371",
    alignItems: "center",
  },
  login: {
    fontWeight: 700,
  },
});
