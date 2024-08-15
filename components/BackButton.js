import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
      activeOpacity={0.8}
    >
      <Icon name="chevron-back" size={40} color="#BBB" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 40,
    height: 40,
  },
});
