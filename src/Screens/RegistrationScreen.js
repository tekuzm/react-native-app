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

import INITIAL_STATE from "../../constants/initialState";

// ========== components ==========

import { Button } from "../components/Button/Button";

// ========== Sign up ==========

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState({ ...INITIAL_STATE, name: "" });

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState({ ...INITIAL_STATE, name: "" });
  };

  const handleInput = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
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
          onChangeText={(value) => handleInput("name", value)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          value={state.email}
          onChangeText={(value) => handleInput("email", value)}
        ></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          value={state.password}
          onChangeText={(value) => handleInput("password", value)}
        ></TextInput>
      </View>
      <Button title="SIGN UP" onPress={hideKeyboard} />
      <View style={styles.additionalInfoWrap}>
        <Text>
          Already have an account? <Text style={styles.login}>LOG IN</Text>
        </Text>
      </View>
    </View>
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
