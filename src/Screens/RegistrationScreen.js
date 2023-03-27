import { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

// ========== components ==========

import { Button } from "../components/Button/Button";

// ========== initial state ==========

const initialState = {
  name: "",
  email: "",
  password: "",
};

// ========== Sign up ==========

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
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
              <Text style={styles.signupHeader}>Sign Up</Text>
              <View style={styles.inputsWrap}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.name}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, name: value }))
                  }
                ></TextInput>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                ></TextInput>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                ></TextInput>
              </View>
              <Button title="SIGN UP" onPress={hideKeyboard} />
              <View style={styles.additionalInfoWrap}>
                <Text>
                  Already have an account?{" "}
                  <Text style={styles.login}>LOG IN</Text>
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
