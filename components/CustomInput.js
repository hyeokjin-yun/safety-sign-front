import React, { useState } from "react";
import { StyleSheet, TextInput, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const inputWidth = Math.min(screenWidth * 0.8, 300);

export default function CustomInput({
  style,
  placeholder,
  keyboardType,
  maxLength,
}) {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={text}
      onChangeText={setText}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    width: "100%",
    height: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
});
