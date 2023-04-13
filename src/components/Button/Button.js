import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const Btn = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    borderRadius: 100,
  },
  btnText: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
});
