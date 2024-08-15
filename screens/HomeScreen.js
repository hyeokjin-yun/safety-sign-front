import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MainLogo from "../components/MainLogo.js";
import { styles } from "../styles/HomeScreenStyles.js";
import { globalStyles } from "../styles/GlobalStyles.js";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.mainLogoContainer}>
        <MainLogo />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[globalStyles.wideButton, styles.wideButton]}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.wideButtonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpAgreement")}
          style={globalStyles.wideButton}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.wideButtonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
