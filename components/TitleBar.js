import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function TitleBar({ children }) {
  return <View style={styles.titleBar}>{children}</View>;
}

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: screenWidth,
    height: 60,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#FFF",
  },
});
