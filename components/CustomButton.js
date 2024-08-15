import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const buttonWidth = Math.min(screenWidth * 0.7, 300);

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
  },
});
