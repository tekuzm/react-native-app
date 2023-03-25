import { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button } from "../Button/Button.js";

export const SignupForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 45 }}>
        <Text style={styles.signupTitle}>Sign Up</Text>
        <View style={styles.inputsWrap}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          ></TextInput>
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
        <Button title="SIGN UP" />
        <View style={styles.additionalInfoWrap}>
          <Text>
            Already have an account? <Text style={styles.login}>LOG IN</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  signupTitle: {
    fontWeight: 500,
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
    // flex: 1,
    marginTop: 16,
    color: "#1B4371",
    alignItems: "center",
  },
  login: {
    fontWeight: 500,
  },
});
