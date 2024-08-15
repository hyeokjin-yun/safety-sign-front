import React from "react";
import { TouchableOpacity, Alert, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function CloseButton({ title, destination, navigation }) {
  const handlePress = () => {
    Alert.alert(
      title + " 종료",
      title + "을 종료하시겠습니까?",
      [
        {
          text: "예",
          onPress: () => navigation.navigate(destination),
        },
        {
          text: "아니요",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableOpacity
      style={styles.closeButton}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Icon name="close" size={40} color="#BBB" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    width: 40,
    height: 40,
  },
});
