import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

export default function MypageButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.userButton}
      // onPress={() => navigation.navigate("Mypage")}
      onPress={() => alert("마이페이지 개발 중")}
      activeOpacity={0.8}
    >
      <Icon name="person" size={35} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  userButton: {
    alignItems: "center",
    width: 35,
    height: 35,
  },
});
