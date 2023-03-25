import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
} from "react-native";
import { SignupForm } from "../components/SignupForm/SignupForm";

export const RegistrationScreen = () => {
  return (
    <View
      // behavior="padding"
      // keyboardVerticalOffset={50}
      style={styles.container}
    >
      <ImageBackground
        source={require("../../assets/img/bg_img.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SignupForm />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
