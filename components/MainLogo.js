import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function MainLogo() {
  return (
    <View style={styles.mainLogo}>
      <Text style={styles.title}>간판지킴이</Text>
      <Text style={styles.subTitle}>옥외광고물 설치 허가 대행 서비스</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 52,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
  },
});
